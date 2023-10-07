package com.codegenius.game.domain.service;

import com.codegenius.game.domain.dto.DadosCoracaoUser;
import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.game.domain.model.GameModel;
import com.codegenius.game.domain.repository.GameRepository;
import com.codegenius.game.infra.GlobalExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

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
                3,
                null,
                gameDTO.getFkUser()
        );
    }
}
