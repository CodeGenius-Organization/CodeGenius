package com.codegenius.game.domain.service;

import com.codegenius.game.domain.dto.DadosCoracaoUser;
import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.game.domain.model.GameModel;
import com.codegenius.game.domain.repository.GameRepository;
import com.codegenius.game.infra.GlobalExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class GameService {

    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public DadosCoracaoUserCompleto createGame(DadosCoracaoUser gameDTO) {
        GameModel gameModel = convertToEntity(gameDTO);

        if (isFkUserAlreadyUsed(gameDTO.getFkUser())) {
            throw new GlobalExceptionHandler.BadRequestException("User already used");
        }

        gameModel.setHearts(3);
        gameModel.setLastUpdate(LocalDateTime.now());
        GameModel createdGame = gameRepository.save(gameModel);
        return convertToDTOCompleto(createdGame);
    }

    public DadosCoracaoUser getGameByFkUserSimplified(UUID fkUser) {
        GameModel games = gameRepository.findByFkUser(fkUser);
        if (games != null) {
            GameModel game = games;
            return convertToDTOSimplified(game);
        } else {
            throw new GlobalExceptionHandler.NotFoundException("User not found");
        }
    }

    @PutMapping("/{fkUser}")
    public DadosCoracaoUser updateGameByFkUser(
            @PathVariable UUID fkUser,
            @Valid @RequestBody DadosCoracaoUser gameDTO) {

        GameModel existingGame = gameRepository.findByFkUser(fkUser);

        if (existingGame != null) {
            existingGame.setHearts(gameDTO.getHearts());
            existingGame.setLastUpdate(LocalDateTime.now());
            gameRepository.save(existingGame);

            DadosCoracaoUser updatedGameDTO = convertToDTOSimplified(existingGame);

            return updatedGameDTO;
        } else {
            throw new GlobalExceptionHandler.NotFoundException("User not found");
        }
    }

    public DadosCoracaoUser convertToDTOSimplified(GameModel game) {
        return new DadosCoracaoUser(
                game.getHearts(),
                game.getLastUpdate(),
                game.getFkUser()
        );
    }

    private boolean isFkUserAlreadyUsed(UUID fkUser) {
        GameModel gamesWithSameFkUser = gameRepository.findByFkUser(fkUser);
        return gamesWithSameFkUser != null;
    }

    private DadosCoracaoUserCompleto convertToDTOCompleto(GameModel game) {
        return new DadosCoracaoUserCompleto(
                game.getId(),
                game.getHearts(),
                game.getLastUpdate(),
                game.getFkUser()
        );
    }

    private GameModel convertToEntity(DadosCoracaoUser gameDTO) {
        return new GameModel(
                null,
                gameDTO.getHearts(),
                null,
                gameDTO.getFkUser()
        );
    }
}
