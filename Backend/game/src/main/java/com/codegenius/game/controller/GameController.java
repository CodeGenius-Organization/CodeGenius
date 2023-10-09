package com.codegenius.game.controller;

import com.codegenius.game.domain.dto.DadosCoracaoUser;
import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.game.domain.service.HeartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.UUID;


/**
 * Controller class for handling game-related operations.
 *
 * @author hidek
 * @since 2023-10-08
 */
@RestController
@RequestMapping("/games")
public class GameController {
    private final HeartService heartService;

    @Autowired
    public GameController(HeartService heartService) {
        this.heartService = heartService;
    }

    /**
     * Endpoint to create a new game.
     *
     * @param gameDTO      The game data to be created.
     * @param uriBuilder   A URI builder for the new resource.
     * @return             ResponseEntity with the created game and status 201 Created.
     *
     * @author hidek
     * @since 2023-10-08
     */
    @PostMapping
    public ResponseEntity<DadosCoracaoUserCompleto> createGame(
            @Valid
            @RequestBody DadosCoracaoUser gameDTO,
            UriComponentsBuilder uriBuilder) {
        DadosCoracaoUserCompleto createdGame = heartService.createGame(gameDTO);

        var uri = uriBuilder.path("/games/{id}").buildAndExpand(createdGame.getId()).toUri();
        return ResponseEntity.created(uri).body(createdGame);
    }

    /**
     * Endpoint to get simplified information of a game based on the fkUser.
     *
     * @param fkUser    The fkUser associated with the game to be retrieved.
     * @return          ResponseEntity with the game information and status 200 OK.
     *
     * @author hidek
     * @since 2023-10-2023
     */
    @GetMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> getGameByFkUser(@PathVariable UUID fkUser) {
        DadosCoracaoUser game = heartService.getGameByFkUserSimplified(fkUser);
        return ResponseEntity.status(200).body(game);
    }

    /**
     * Endpoint to update a game based on the fkUser.
     *
     * @param fkUser    The fkUser associated with the game to be updated.
     * @param gameDTO   The game data to be updated.
     * @return          ResponseEntity with the updated game and status 200 OK.
     *
     * @author hidek
     * @since 2023-10-08
     */
    @PutMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> updateGameByFkUser(
            @PathVariable UUID fkUser,
            @Valid @RequestBody DadosCoracaoUser gameDTO) {

        DadosCoracaoUser update = heartService.updateGameByFkUser(fkUser, gameDTO);

        return ResponseEntity.status(200).body(update);
    }
}
