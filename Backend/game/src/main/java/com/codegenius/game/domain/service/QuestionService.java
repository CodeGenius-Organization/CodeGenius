package com.codegenius.game.domain.service;

import com.codegenius.game.domain.dto.DadosQuestoes;
import com.codegenius.game.domain.dto.DadosQuestoesCompleto;
import com.codegenius.game.domain.dto.DadosQuestoesUpdate;
import com.codegenius.game.domain.model.QuestionModel;
import com.codegenius.game.domain.repository.QuestionRepository;
import com.codegenius.game.infra.exception.GlobalExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    private final ResponseService responseService;

    @Autowired
    public QuestionService(QuestionRepository questionRepository, ResponseService responseService) {
        this.questionRepository = questionRepository;
        this.responseService = responseService;
    }

    public DadosQuestoesCompleto createQuestion(DadosQuestoes questionDTO) {
        QuestionModel question = new QuestionModel(null, questionDTO.getQuestion_type(), questionDTO.getStatement(), questionDTO.getTest_question(), questionDTO.getLesson_content());

        questionRepository.save(question);

        DadosQuestoesCompleto questionComp = new DadosQuestoesCompleto(question.getId(), question.getQuestionType(), question.getStatement(), question.getTestQuestion(), question.getLeassonContent());
        return questionComp;
    }

    public List<DadosQuestoesCompleto> findAll() {
        List<QuestionModel> questoes = questionRepository.findAll();

        List<DadosQuestoesCompleto> questoesDTO = convertToQuestaoModelList(questoes);

        return questoesDTO;
    }

    public DadosQuestoes update(UUID id, DadosQuestoesUpdate questaoDTO) {
        QuestionModel questao = questionRepository.findById(id).orElseThrow(() -> new GlobalExceptionHandler.NotFoundException("Question not found with id: " + id));

        if (questaoDTO.getQuestion_type() != null) {
            questao.setQuestionType(questaoDTO.getQuestion_type());
        }
        if (questaoDTO.getTest_question() != null) {
            questao.setTestQuestion(questaoDTO.getTest_question());
        }
        if (questaoDTO.getStatement() != null) {
            questao.setStatement(questaoDTO.getStatement());
        }
        if (questaoDTO.getLesson_content() != null) {
            questao.setLeassonContent(questaoDTO.getLesson_content());
        }

        QuestionModel updatedQuestao = questionRepository.save(questao);

        DadosQuestoes updatedQuestaoDTO = convertToDTO(updatedQuestao);

        return updatedQuestaoDTO;
    }

    public void delete(UUID id) {
        QuestionModel questao = questionRepository.findById(id).orElseThrow(() -> new GlobalExceptionHandler.NotFoundException("Question not found with id: " + id));

        responseService.deleteAll(questao.getId());
        questionRepository.deleteById(questao.getId());
    }

    private List<DadosQuestoesCompleto> convertToQuestaoModelList(List<QuestionModel> questoes) {
        List<DadosQuestoesCompleto> questao = new ArrayList<>();

        for (QuestionModel questaoModel: questoes) {
            DadosQuestoesCompleto questaoDTO = new DadosQuestoesCompleto(questaoModel);
            questao.add(questaoDTO);
        }

        return questao;
    }

    private DadosQuestoes convertToDTO(QuestionModel questao) {
        DadosQuestoes questaoDTO = new DadosQuestoes();
        questaoDTO.setQuestion_type(questao.getQuestionType());
        questaoDTO.setTest_question(questao.getTestQuestion());
        questaoDTO.setStatement(questao.getStatement());
        questaoDTO.setLesson_content(questao.getLeassonContent());

        return questaoDTO;
    }
}
