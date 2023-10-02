package com.codegenius.game.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DadosCoracaoUserCompleto {
    @JsonProperty("id")
    private UUID id;
    @JsonProperty("coracao")
    private int hearts;
    @JsonProperty("atualizacao")
    private LocalDateTime lastUpdate;
    @JsonProperty("fkUser")
    private UUID fkUser;
}
