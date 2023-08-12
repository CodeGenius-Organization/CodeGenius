package com.codegenius.user.domain.repository;

import com.codegenius.user.domain.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

/**
 * Repository interface for managing user data.
 *
 * @author hidek
 * @since 2023-08-09
 */
public interface UserRepository extends JpaRepository<UserModel, UUID> {
    /**
     * Finds a user by their email.
     *
     * @param email The email of the user to find.
     * @return An Optional containing the user with the given email, if found.
     *
     * @author hidek
     * @since 2023-08-09
     */
    Optional<UserModel> findByEmail(String email);
    /**
     * Checks if a user with the given email exists.
     *
     * @param email The email to check for existence.
     * @return True if a user with the given email exists, otherwise false.
     *
     * @author hidek
     * @since 2023-08-09
     */
    Boolean existsByEmail(String email);
}
