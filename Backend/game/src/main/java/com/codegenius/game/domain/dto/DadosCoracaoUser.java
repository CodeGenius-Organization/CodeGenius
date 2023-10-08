package com.codegenius.game.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Data class representing heart-related information for a user.
 *
 * @author hidek
 * @since 2023-10-08
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DadosCoracaoUser {
    @JsonProperty("coracao")
    @Min(value = 0)
    @Max(value = 3)
    private int hearts;
    @JsonProperty("atualização")
    private LocalDateTime lastUpdate;
    @JsonProperty("fkUser")
    private UUID fkUser;
}
