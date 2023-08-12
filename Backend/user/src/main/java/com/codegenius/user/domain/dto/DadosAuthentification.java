package com.codegenius.user.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Data class representing user authentication data.
 *
 * @author hidek
 * @since 2023-08-09
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DadosAuthentification {
    @JsonProperty("email")
    private String email;
    @JsonProperty("password")
    private String password;
}
