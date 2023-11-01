package com.codegenius.game.controller;

import com.codegenius.game.domain.dto.DadosQuestoes;
import com.codegenius.game.domain.dto.DadosQuestoesCompleto;
import com.codegenius.game.domain.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8383"})
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    @Operation(summary = "Create a new question", description = "Endpoint to create a new question with provided details.")
    @ApiResponse(responseCode = "201", description = "Question created", content = @Content(mediaType = "application/json", schema = @Schema(implementation = DadosQuestoesCompleto.class)))
    public ResponseEntity<DadosQuestoesCompleto> createQuestion (
            @RequestBody @Valid DadosQuestoes questionDTO,
            UriComponentsBuilder uriBuilder){
       DadosQuestoesCompleto createdQuestion = questionService.createQuestion(questionDTO);

        var uri = uriBuilder.path("/questions/{id}").buildAndExpand(createdQuestion.getId()).toUri();
        return ResponseEntity.created(uri).body(createdQuestion);
    }

    @GetMapping
    @Operation(summary = "Get all questions", description = "Endpoint to retrieve details of all available questions.")
    @ApiResponse(responseCode = "200", description = "List of questions", content = @Content(mediaType = "application/json", schema = @Schema(implementation = DadosQuestoesCompleto.class)))
    public ResponseEntity<List<DadosQuestoesCompleto>> getQuestion (){
        List<DadosQuestoesCompleto> questoes = questionService.findAll();
        return questoes.isEmpty()
                ? ResponseEntity.status(204).body(questoes)
                : ResponseEntity.status(200).body(questoes);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update a question", description = "Endpoint to update details of a specific question.")
    @ApiResponse(responseCode = "200", description = "Updated question", content = @Content(mediaType = "application/json", schema = @Schema(implementation = DadosQuestoes.class)))
    public ResponseEntity<DadosQuestoes> putQuestion (
            @RequestParam UUID id,
            @RequestBody @Valid DadosQuestoes questionDTO
    ) {
        DadosQuestoes questao = questionService.update(id,questionDTO);
        return ResponseEntity.status(200).body(questao);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a question", description = "Endpoint to delete details of a specific question.")
    @ApiResponse(responseCode = "204", description = "Question deleted")
    public ResponseEntity deleteQuestion (
            @RequestParam UUID id
    ) {
        questionService.delete(id);
        return ResponseEntity.status(204).build();
    }
}
