package com.codegenius.user.controller;

import com.codegenius.user.domain.dto.DadosCadastroCompleto;
import com.codegenius.user.domain.dto.DadosCadastroUser;
import com.codegenius.user.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.UUID;

/**
 * Controller class for handling user-related operations.
 *
 * @author hidek
 * @since 2023-08-09
 */
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    /**
     * Saves user registration data and returns a response with saved user details.
     *
     * @param userDTO       The basic user registration data.
     * @param uriBuilder    The UriComponentsBuilder for building response URI.
     * @param userComp      The complete user registration data.
     * @return ResponseEntity containing saved user data and a created URI.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @PostMapping("/save")
    public ResponseEntity<DadosCadastroUser> saveUser(@RequestBody DadosCadastroUser userDTO, UriComponentsBuilder uriBuilder, DadosCadastroCompleto userComp){
        DadosCadastroUser savedUser = userService.saveUser(userDTO, userComp);

        var uri = uriBuilder.path("/user/{id}").buildAndExpand(userComp.getId()).toUri();
        return ResponseEntity.created(uri).body(savedUser);
    }

    /**
     * Retrieves user details based on the provided user ID.
     *
     * @param id The unique identifier of the user.
     * @return ResponseEntity containing the user's registration data.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @GetMapping("/{id}")
    public ResponseEntity<DadosCadastroUser> findById(@PathVariable UUID id) {
        DadosCadastroUser user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<DadosCadastroUser> updateUser(@PathVariable UUID id, @RequestBody) {
//
//    }

    /**
     * Marks a user as inactive based on the provided user ID.
     *
     * @param id The unique identifier of the user.
     * @return ResponseEntity with a success message.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable UUID id) {
        userService.markUserAsInactive(id);
        return ResponseEntity.ok("User marked as inactive");
    }

}
