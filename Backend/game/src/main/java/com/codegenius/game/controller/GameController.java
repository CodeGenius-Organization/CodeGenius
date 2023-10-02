package com.codegenius.game.controller;

import com.codegenius.game.domain.dto.DadosCoracaoUser;
import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/games")
public class GameController {
    @GetMapping("/{fkUser}")
    public ResponseEntity<DadosCoracaoUser> findByFkUser(@PathVariable UUID id) {
        return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<DadosCoracaoUser> updateHeart(@PathVariable UUID id, @Valid @RequestBody DadosCoracaoUser userHeartDTO, DadosCoracaoUserCompleto userHeartComp ) {
        return null;
    }
}
