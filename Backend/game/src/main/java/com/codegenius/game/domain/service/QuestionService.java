package com.codegenius.game.domain.service;

import com.codegenius.game.domain.dto.DadosQuestoes;
import com.codegenius.game.domain.dto.DadosQuestoesCompleto;
import com.codegenius.game.domain.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * Service class for managing question-related game data.
 *
 * @author hidek
 * @since 2023-10-08
 */
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public DadosQuestoesCompleto createQuestion(DadosQuestoes questionDTO) {
        return null;
    }
}
