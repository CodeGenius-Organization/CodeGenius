package com.codegenius.user.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

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
    @NotBlank
    @Email
    private String email;
    @JsonProperty("password")
    @NotBlank
    private String password;
}
