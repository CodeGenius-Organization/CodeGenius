package com.codegenius.game.domain.service;

import com.codegenius.game.domain.dto.DadosQuestoes;
import com.codegenius.game.domain.dto.DadosQuestoesCompleto;
import com.codegenius.game.domain.model.QuestionModel;
import com.codegenius.game.domain.repository.QuestionRepository;
import com.codegenius.game.infra.exception.GlobalExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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
        QuestionModel question = new QuestionModel(null, questionDTO.getQuestion_type(), questionDTO.getStatement(), questionDTO.isTest_question(), questionDTO.getLesson_content());

        questionRepository.save(question);

        DadosQuestoesCompleto questionComp = new DadosQuestoesCompleto(question.getId(), question.getQuestionType(), question.getStatement(), question.isTestQuestion(), question.getLeassonContent());
        return questionComp;
    }

    public List<DadosQuestoesCompleto> findAll() {
        List<QuestionModel> questoes = questionRepository.findAll();

        List<DadosQuestoesCompleto> questoesDTO = convertToQuestaoModelList(questoes);

        return questoesDTO;
    }

    public DadosQuestoes update(UUID id, DadosQuestoes questaoDTO) {
        QuestionModel questao = questionRepository.findById(id).orElseThrow();
        return null;
    }

    private List<DadosQuestoesCompleto> convertToQuestaoModelList(List<QuestionModel> questoes) {
        List<DadosQuestoesCompleto> questao = new ArrayList<>();

        for (QuestionModel questaoModel: questoes) {
            DadosQuestoesCompleto questaoDTO = new DadosQuestoesCompleto(questaoModel);
            questao.add(questaoDTO);
        }

        return questao;
    }
}
