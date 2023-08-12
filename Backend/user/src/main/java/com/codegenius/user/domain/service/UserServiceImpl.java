package com.codegenius.user.domain.service;

import com.codegenius.user.domain.dto.DadosCadastroCompleto;
import com.codegenius.user.domain.dto.DadosCadastroUser;
import com.codegenius.user.domain.model.UserModel;
import com.codegenius.user.domain.repository.UserRepository;
import com.codegenius.user.infra.exception.GlobalExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
            throw new GlobalExceptionHandler.BadRequestException("user invalid");
        }
        if (repository.existsByEmail(user.getEmail())){
            throw new GlobalExceptionHandler.BadRequestException("user already exist");
        }
        if (!isValidEmail(user.getEmail())){
            throw new GlobalExceptionHandler.BadRequestException("email invalid");
        }
        if (!isValidPassword(user.getPassword())){
            throw new GlobalExceptionHandler.BadRequestException("password invalid");
        }

        // Create a UserModel and encode password
        UserModel use = new UserModel(null, user.getName(), user.getEmail(), user.getPassword());
        use.setPassword(encoder.encode(use.getPassword()));
        user.setPassword(use.getPassword());

        // Save the UserModel
        repository.save(use);

        // Update userComp with ID and other details
        userComp.setId(repository.findByEmail(use.getEmail()).get().getId());
        userComp.setName(repository.findByEmail(use.getEmail()).get().getName());
        userComp.setEmail(repository.findByEmail(use.getEmail()).get().getEmail());
        userComp.setPassword(repository.findByEmail(use.getEmail()).get().getPassword());

        return user;
    }

    // Other methods and fields...

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
                .orElseThrow(() -> new GlobalExceptionHandler.NotFoundException("Invalid user ID: " + id)));

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
}
