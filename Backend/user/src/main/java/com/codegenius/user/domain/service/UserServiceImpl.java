package com.codegenius.user.domain.service;

import com.codegenius.user.domain.dto.DadosCadastroCompleto;
import com.codegenius.user.domain.dto.DadosCadastroUser;
import com.codegenius.user.domain.model.UserModel;
import com.codegenius.user.domain.repository.UserRepository;
import com.codegenius.user.infra.exception.GlobalExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;


/**
 * Service implementation for managing user data and registrations.
 *
 * @author hidek
 * @since 2023-08-09
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository repository;
    private PasswordEncoder encoder;

    /**
     * Constructs a new instance of UserServiceImpl.
     *
     * @param userRepository The repository for user data.
     * @param encoder        The password encoder for hashing passwords.
     *
     * @author hidek
     * @since 2023-08-09
     */
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder encoder){
        this.repository = userRepository;
        this.encoder = encoder;
    }

    /**
     * Saves user data and their complete registration details.
     *
     * @param user     The basic user registration data.
     * @param userComp The complete user registration data.
     * @return The saved user's basic registration data.
     * @throws GlobalExceptionHandler.BadRequestException If user data is invalid or user already exists.
     *
     * @author hidek
     * @since 2023-08-09
     */
    public DadosCadastroUser saveUser(DadosCadastroUser user, DadosCadastroCompleto userComp) {

        // Validation checks for user data
        if (user.getEmail().isBlank() || user.getName().isBlank() || user.getPassword().isBlank()) {
            throw new GlobalExceptionHandler.BadRequestException("User invalid");
        }
        Optional<UserModel> existingUser = repository.findByEmailAndActiveTrue(user.getEmail());

        if (existingUser.isPresent()) {
            UserModel userFound = existingUser.get();

            if (userFound.getActive().equals(true)) {
                throw new GlobalExceptionHandler.BadRequestException("User with this email already exists.");
            }
        }
        if (!isValidEmail(user.getEmail())){
            throw new GlobalExceptionHandler.BadRequestException("Email invalid");
        }
        if (!isValidPassword(user.getPassword())){
            throw new GlobalExceptionHandler.BadRequestException("Password invalid");
        }

        // Create a UserModel and encode password
        UserModel use = new UserModel(null, user.getName(), user.getEmail(), user.getPassword(), true);
        use.setPassword(encoder.encode(use.getPassword()));
        user.setPassword(use.getPassword());

        // Save the UserModel
        repository.save(use);

        // Update userComp with ID and other details
        userComp.setId(repository.findByEmailAndActiveTrue(use.getEmail()).get().getId());
        userComp.setName(repository.findByEmailAndActiveTrue(use.getEmail()).get().getName());
        userComp.setEmail(repository.findByEmailAndActiveTrue(use.getEmail()).get().getEmail());
        userComp.setPassword(repository.findByEmailAndActiveTrue(use.getEmail()).get().getPassword());
        userComp.setActive(repository.findByEmailAndActiveTrue(use.getEmail()).get().getActive());

        return user;
    }

    /**
     * Retrieves user information based on the provided user ID.
     *
     * @param id The unique identifier of the user.
     * @return The user's basic registration data associated with the provided ID.
     * @throws GlobalExceptionHandler.NotFoundException If user with the provided ID is not found.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @Override
    public DadosCadastroUser findById(UUID id) {
        DadosCadastroUser user = new DadosCadastroUser(repository.findById(id)
                .filter(userModel -> Boolean.TRUE.equals(userModel.getActive()))
                .orElseThrow(() -> new GlobalExceptionHandler.NotFoundException("User not found or inactive with ID: " + id)));

        return user;
    }

    // Private helper methods for validation...

    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        return email.matches(emailRegex);
    }

    private boolean isValidPassword(String password) {
        String passwordRegex = "^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        return password.matches(passwordRegex);
    }

    /**
     * Updates a user's information based on the provided ID and user data.
     *
     * @param id       The unique identifier of the user to update.
     * @param userDTO  The DTO containing the updated user information.
     * @param userComp The complete user registration data.
     * @return The updated user details.
     * @throws GlobalExceptionHandler.BadRequestException if a user with the provided email already exists and is active.
     * @throws GlobalExceptionHandler.NotFoundException  if the user is not found with the provided ID.
     *
     * @author hidek
     * @since 2023-08-15
     */
    @Override
    public DadosCadastroUser updateUser(UUID id, DadosCadastroUser userDTO, DadosCadastroCompleto userComp) {
        Optional<UserModel> existingUser = repository.findByEmailAndActiveTrue(userDTO.getEmail());

        if (existingUser.isPresent() && !existingUser.get().getId().equals(id)) {
            throw new GlobalExceptionHandler.BadRequestException("User with this email already exists.");
        }

        UserModel userToUpdate = repository.findById(id)
                .orElseThrow(() -> new GlobalExceptionHandler.NotFoundException("User not found with ID: " + id));

        // Update the fields provided, while keeping others unchanged
        if (userDTO.getName() != null) {
            userToUpdate.setName(userDTO.getName());
        }
        if (userDTO.getEmail() != null) {
            userToUpdate.setEmail(userDTO.getEmail());
        }
        if (userDTO.getPassword() != null) {
            userToUpdate.setPassword(userDTO.getPassword());
        }

        repository.save(userToUpdate);

        DadosCadastroUser updatedUser = new DadosCadastroUser(userToUpdate);
        return updatedUser;
    }

    /**
     * Marks a user as inactive based on the provided user ID.
     *
     * @param id The unique identifier of the user to be marked as inactive.
     * @throws GlobalExceptionHandler.NotFoundException if the user with the given ID is not found.
     *
     * @author hidek
     * @since 2023-08-15
     */
    @Override
    public void markUserAsInactive(UUID id) {
        UserModel user = repository.findById(id)
                .orElseThrow(() -> new GlobalExceptionHandler.NotFoundException("User not found with ID: " + id));

        user.setActive(false);

        repository.save(user);
    }
}
