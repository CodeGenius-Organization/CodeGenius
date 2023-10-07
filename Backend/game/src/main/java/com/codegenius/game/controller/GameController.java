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
    @GetMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> findByFkUser(@PathVariable UUID id) {
        return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<DadosCoracaoUser> updateHeart(@PathVariable UUID id, @Valid @RequestBody DadosCoracaoUser userHeartDTO, DadosCoracaoUserCompleto userHeartComp ) {
        return null;
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
}
