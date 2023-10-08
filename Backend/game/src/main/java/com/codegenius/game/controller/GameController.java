package com.codegenius.game.controller;

import com.codegenius.game.domain.dto.DadosCoracaoUser;
import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.game.domain.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/games")
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping
    public ResponseEntity<DadosCoracaoUserCompleto> createGame(
            @Valid
            @RequestBody DadosCoracaoUser gameDTO,
            UriComponentsBuilder uriBuilder) {
        DadosCoracaoUserCompleto createdGame = gameService.createGame(gameDTO);

        var uri = uriBuilder.path("/games/{id}").buildAndExpand(createdGame.getId()).toUri();
        return ResponseEntity.created(uri).body(createdGame);
    }

    @GetMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> getGameByFkUser(@PathVariable UUID fkUser) {
        DadosCoracaoUser game = gameService.getGameByFkUserSimplified(fkUser);
        return ResponseEntity.status(200).body(game);
    }
}
