package com.codegenius.game.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DadosCoracaoUser {
    @JsonProperty("coracao")
    private int hearts;
    @JsonProperty("atualização")
    private LocalDateTime lastUpdate;
}
