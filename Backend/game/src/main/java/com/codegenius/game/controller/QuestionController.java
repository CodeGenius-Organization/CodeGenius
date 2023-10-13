package com.codegenius.game.controller;

import com.codegenius.game.domain.dto.DadosCoracaoUserCompleto;
import com.codegenius.game.domain.dto.DadosQuestoes;
import com.codegenius.game.domain.dto.DadosQuestoesCompleto;
import com.codegenius.game.domain.service.HeartService;
import com.codegenius.game.domain.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public ResponseEntity<DadosQuestoesCompleto> createQuestion (
            @RequestBody @Valid DadosQuestoes questionDTO,
            UriComponentsBuilder uriBuilder){
       DadosQuestoesCompleto createdQuestion = questionService.createQuestion(questionDTO);

        var uri = uriBuilder.path("/questions/{id}").buildAndExpand(createdQuestion.getId()).toUri();
        return ResponseEntity.created(uri).body(createdQuestion);
    }
}
