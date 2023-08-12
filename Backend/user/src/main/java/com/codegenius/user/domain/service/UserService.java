package com.codegenius.user.domain.service;

import com.codegenius.user.domain.dto.DadosCadastroCompleto;
import com.codegenius.user.domain.dto.DadosCadastroUser;

import java.util.UUID;

/**
 * The `UserService` interface provides methods for managing user data and registrations.
 *
 * @author hidek
 * @since 2023-08-09
 */
public interface UserService {
    /**
     * Saves user data and their complete registration details.
     *
     * @param user     The basic user registration data.
     * @param userComp The complete user registration data.
     * @return The saved user's basic registration data.
     *
     * @author hidek
     * @since 2023-08-09
     */
    DadosCadastroUser saveUser(DadosCadastroUser user, DadosCadastroCompleto userComp);

    /**
     * Retrieves user information based on the provided user ID.
     *
     * @param id The unique identifier of the user.
     * @return The user's basic registration data associated with the provided ID.
     *
     * @author hidek
     * @since 2023-08-09
     */
    DadosCadastroUser findById(UUID id);
}
