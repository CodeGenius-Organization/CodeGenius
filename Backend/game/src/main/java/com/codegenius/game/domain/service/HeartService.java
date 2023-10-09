package com.codegenius.game.domain.service;

import com.codegenius.game.domain.dto.DadosCoracaoUser;
import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.game.domain.model.HeartModel;
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

/**
 * Service class for managing heart-related game data.
 *
 * @author hidek
 * @since 2023-10-08
 */
@Service
public class HeartService {

    private final GameRepository gameRepository;

    @Autowired
    public HeartService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    /**
     * Creates a new game entry for a user.
     *
     * @param gameDTO                                     The heart-related information to be created.
     * @return                                            The complete heart-related information for the newly created game.
     * @throws GlobalExceptionHandler.BadRequestException If the user's UUID is already associated with another game.
     *
     * @author hidek
     * @since 2023-10-09
     */
    public DadosCoracaoUserCompleto createGame(DadosCoracaoUser gameDTO) {
        HeartModel gameModel = convertToEntity(gameDTO);

        if (isFkUserAlreadyUsed(gameDTO.getFkUser())) {
            throw new GlobalExceptionHandler.BadRequestException("User already used");
        }

        gameModel.setHearts(3);
        gameModel.setLastUpdate(LocalDateTime.now());
        HeartModel createdGame = gameRepository.save(gameModel);
        return convertToDTOCompleto(createdGame);
    }

    /**
     * Retrieves simplified heart-related information for a user based on their UUID.
     *
     * @param fkUser                                    The UUID of the user.
     * @return                                          The simplified heart-related information for the user.
     * @throws GlobalExceptionHandler.NotFoundException If the user is not found.
     *
     * @author hidek
     * @since 2023-10-09
     */
    public DadosCoracaoUser getGameByFkUserSimplified(UUID fkUser) {
        HeartModel games = gameRepository.findByFkUser(fkUser);
        if (games != null) {
            HeartModel game = games;
            return convertToDTOSimplified(game);
        } else {
            throw new GlobalExceptionHandler.NotFoundException("User not found");
        }
    }

    /**
     * Updates heart-related information for a user based on their UUID.
     *
     * @param fkUser                                    The UUID of the user.
     * @param gameDTO                                   The updated heart-related information.
     * @return                                          The updated heart-related information.
     * @throws GlobalExceptionHandler.NotFoundException If the user is not found.
     *
     * @author hidek
     * @since 2023-10-09
     */
    @PutMapping("/{fkUser}")
    public DadosCoracaoUser updateGameByFkUser(
            @PathVariable UUID fkUser,
            @Valid @RequestBody DadosCoracaoUser gameDTO) {

        HeartModel existingGame = gameRepository.findByFkUser(fkUser);

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

    /**
     * Converts a GameModel entity to simplified heart-related information (DTO).
     *
     * @param game The GameModel entity.
     * @return     The simplified heart-related information.
     *
     * @author hidek
     * @since 2023-10-09
     */
    public DadosCoracaoUser convertToDTOSimplified(HeartModel game) {
        return new DadosCoracaoUser(
                game.getHearts(),
                game.getLastUpdate(),
                game.getFkUser()
        );
    }

    /**
     * Checks if a user's UUID is already associated with a game.
     *
     * @param fkUser The UUID of the user.
     * @return       True if the user's UUID is already associated with a game, false otherwise.
     *
     * @author hidek
     * @since 2023-10-09
     */
    private boolean isFkUserAlreadyUsed(UUID fkUser) {
        HeartModel gamesWithSameFkUser = gameRepository.findByFkUser(fkUser);
        return gamesWithSameFkUser != null;
    }

    /**
     * Converts a GameModel entity to complete heart-related information (DTO).
     *
     * @param game The GameModel entity.
     * @return     The complete heart-related information.
     *
     * @author hidek
     * @since 2023-10-09
     */

    private DadosCoracaoUserCompleto convertToDTOCompleto(HeartModel game) {
        return new DadosCoracaoUserCompleto(
                game.getId(),
                game.getHearts(),
                game.getLastUpdate(),
                game.getFkUser()
        );
    }

    /**
     * Converts a DadosCoracaoUser DTO to a GameModel entity.
     *
     * @param gameDTO The heart-related information DTO.
     * @return        The GameModel entity.
     *
     * @author hidek
     * @since 2023-10-09
     */
    private HeartModel convertToEntity(DadosCoracaoUser gameDTO) {
        return new HeartModel(
                null,
                gameDTO.getHearts(),
                null,
                gameDTO.getFkUser()
        );
    }
}
