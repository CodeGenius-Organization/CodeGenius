package com.codegenius.user.controller;

import com.codegenius.user.domain.dto.DadosCoracaoUser;
import com.codegenius.user.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.user.domain.service.HeartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.UUID;


/**
 * Controller class for handling game-related operations.
 *
 * @author hidek
 * @since 2023-10-08
 */
@RestController
@RequestMapping("/hearts")
public class HeartController {
    private final HeartService heartService;

    @Autowired
    public HeartController(HeartService heartService) {
        this.heartService = heartService;
    }

    /**
     * Endpoint to create a new heart.
     *
     * @param heartDTO     The heart data to be created.
     * @param uriBuilder   A URI builder for the new resource.
     * @return             ResponseEntity with the created heart and status 201 Created.
     *
     * @author hidek
     * @since 2023-10-08
     */
    @PostMapping
    public ResponseEntity<DadosCoracaoUserCompleto> createHeart(
            @RequestBody @Valid DadosCoracaoUser heartDTO,
            UriComponentsBuilder uriBuilder) {
        DadosCoracaoUserCompleto createdHeart = heartService.createHeart(heartDTO);

        var uri = uriBuilder.path("/hearts/{id}").buildAndExpand(createdHeart.getId()).toUri();
        return ResponseEntity.created(uri).body(createdHeart);
    }

    /**
     * Endpoint to get simplified information of a heart based on the fkUser.
     *
     * @param fkUser    The fkUser associated with the heart to be retrieved.
     * @return          ResponseEntity with the game information and status 200 OK.
     *
     * @author hidek
     * @since 2023-10-2023
     */
    @GetMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> getHeartByFkUser(@PathVariable UUID fkUser) {
        DadosCoracaoUser heart = heartService.getHeartByFkUser(fkUser);
        return ResponseEntity.status(200).body(heart);
    }

    /**
     * Endpoint to update a heart based on the fkUser.
     *
     * @param fkUser    The fkUser associated with the heart to be updated.
     * @param heartDTO  The heart data to be updated.
     * @return          ResponseEntity with the updated heart and status 200 OK.
     *
     * @author hidek
     * @since 2023-10-08
     */
    @PutMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> updateHeartByFkUser(
            @PathVariable UUID fkUser,
            @RequestBody @Valid DadosCoracaoUser heartDTO) {

        DadosCoracaoUser update = heartService.updateHeartByFkUser(fkUser, heartDTO);

        return ResponseEntity.status(200).body(update);
    }
}
