package com.codegenius.game.controller;

import com.codegenius.game.domain.dto.DadosQuestoes;
import com.codegenius.game.domain.dto.DadosQuestoesCompleto;
import com.codegenius.game.domain.service.QuestionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.UUID;

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

    @GetMapping
    public ResponseEntity<List<DadosQuestoesCompleto>> getQuestion (){
        List<DadosQuestoesCompleto> questoes = questionService.findAll();
        return questoes.isEmpty()
                ? ResponseEntity.status(204).body(questoes)
                : ResponseEntity.status(200).body(questoes);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DadosQuestoes> putQuestion (
            @RequestParam UUID id,
            @RequestBody @Valid DadosQuestoes questionDTO
    ) {
        DadosQuestoes questao = questionService.update(id,questionDTO);
        return ResponseEntity.status(200).body(questao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteQuestion (
            @RequestParam UUID id
    ) {
        return null;
    }
}
