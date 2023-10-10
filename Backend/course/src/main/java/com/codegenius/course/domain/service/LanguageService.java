package com.codegenius.course.domain.service;

import com.codegenius.course.domain.model.LanguageModel;
import com.codegenius.course.domain.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class LanguageService {

    @Autowired
    private LanguageRepository languageRepository;

    public LanguageModel createLanguage(LanguageModel language) {
        return this.languageRepository.save(language);
    }

    public List<LanguageModel> getLanguages() {
        return this.languageRepository.findAll();
    }

    public List<LanguageModel> findLanguageByIdIn(List<UUID> ids) {
        return this.languageRepository.findLanguageByIdIn(ids);
    }
}