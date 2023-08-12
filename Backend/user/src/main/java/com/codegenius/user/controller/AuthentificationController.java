package com.codegenius.user.controller;

import com.codegenius.user.domain.dto.DadosAuthentification;
import com.codegenius.user.domain.dto.DadosTokenJWT;
import com.codegenius.user.domain.model.UserModel;
import com.codegenius.user.domain.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class for handling user authentication.
 *
 * @author hidek
 * @since 2023-08-09
 */
@RestController
public class AuthentificationController {
    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    /**
     * Handles user login and generates an authentication token.
     *
     * @param dadosAuthentification The user's authentication data.
     * @return ResponseEntity containing the generated token.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @GetMapping("/login")
    public ResponseEntity login(@RequestBody DadosAuthentification dadosAuthentification) {
        // Create an authentication token based on user's email and password
        var authenticationToken = new UsernamePasswordAuthenticationToken(dadosAuthentification.getEmail(), dadosAuthentification.getPassword());
        // Authenticate the user using the AuthenticationManager
        var authentication =  manager.authenticate(authenticationToken);

        // Generate a token for the authenticated user
        var token = tokenService.token((UserModel) authentication.getPrincipal());
        // Return the generated token as part of a ResponseEntity
        return ResponseEntity.ok(new DadosTokenJWT(token));
    }
}
