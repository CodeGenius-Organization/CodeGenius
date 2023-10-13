package com.codegenius.game.domain.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DadosQuestoesCompleto {
    @JsonIgnore
    private UUID id;
    private String question_type;
    private String statement;
    private boolean test_question;
    private UUID lesson_content;
}
