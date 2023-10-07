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
    GameModel findByFkUser(UUID fkUser);
}
