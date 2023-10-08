package com.codegenius.game.domain.repository;

import com.codegenius.game.domain.model.GameModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Repository interface for managing game data.
 *
 * @author hidek
 * @since 2023-10-04
 */
public interface GameRepository extends JpaRepository<GameModel, UUID> {
    /**
     * Find a game by the foreign key user (fkUser).
     *
     * @param fkUser The foreign key user to search for.
     * @return The game associated with the given fkUser, or null if not found.
     *
     * @author hidek
     * @since 2023-10-08
     */
    GameModel findByFkUser(UUID fkUser);
}
