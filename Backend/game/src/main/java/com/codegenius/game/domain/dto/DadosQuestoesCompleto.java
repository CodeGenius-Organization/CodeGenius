package com.codegenius.game.domain.dto;

import com.codegenius.game.domain.model.QuestionModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
    private UUID id;
    @JsonProperty("tipo")
    @NotBlank
    private String question_type;
    @JsonProperty("enunciado")
    @NotBlank
    private String statement;
    @JsonProperty("teste")
    private boolean test_question;
    @JsonProperty("fkLessonContent")
    @NotNull
    private UUID lesson_content;

    public DadosQuestoesCompleto(QuestionModel model) {
        this.id = model.getId();
        this.question_type = model.getQuestionType();
        this.statement = model.getStatement();
        this.test_question = model.isTestQuestion();
        this.lesson_content = model.getLeassonContent();
    }
}
