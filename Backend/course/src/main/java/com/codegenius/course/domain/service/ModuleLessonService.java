package com.codegenius.course.domain.service;

import com.codegenius.course.domain.model.CourseModuleModel;
import com.codegenius.course.domain.model.ModuleLessonModel;
import com.codegenius.course.domain.repository.CourseModuleRepository;
import com.codegenius.course.domain.repository.ModuleLessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ModuleLessonService {

    @Autowired
    private ModuleLessonRepository moduleLessonRepository;

    @Autowired
    private CourseModuleRepository courseModuleRepository;

    public ModuleLessonModel createModuleLesson(UUID moduleId, ModuleLessonModel moduleLesson) {
        Optional<CourseModuleModel> courseModule = courseModuleRepository.findById(moduleId);

        if (courseModule.isEmpty()) {
            // throw exception módulo do curso não encontrado
            return null;
        }

        moduleLesson.setModule(courseModule.get());
        return moduleLessonRepository.save(moduleLesson);
    }

    public List<ModuleLessonModel> getAllModuleLessonByModuleId(UUID moduleId) {
        return moduleLessonRepository.findAllByModule_Id(moduleId);
    }

    public ModuleLessonModel updateModuleLesson(UUID lessonId, ModuleLessonModel newModuleLesson) {
        Optional<ModuleLessonModel> moduleLesson = moduleLessonRepository.findById(lessonId);

        if (moduleLesson.isEmpty()) {
            return null;
        }
        newModuleLesson.setId(lessonId);
        return moduleLessonRepository.save(newModuleLesson);
    }

    public boolean deleteModuleLesson(UUID lessonId) {
        boolean lessonExists = moduleLessonRepository.existsById(lessonId);

        if (lessonExists) {
            moduleLessonRepository.deleteById(lessonId);
            return true;
        }

        return false;
    }
}