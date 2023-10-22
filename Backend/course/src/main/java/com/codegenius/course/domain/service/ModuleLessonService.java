package com.codegenius.course.domain.service;

import com.codegenius.course.domain.dto.ModuleLessonUpdateDTO;
import com.codegenius.course.domain.model.CourseModuleModel;
import com.codegenius.course.domain.model.ModuleLessonModel;
import com.codegenius.course.domain.repository.CourseModuleRepository;
import com.codegenius.course.domain.repository.ModuleLessonRepository;
import com.codegenius.course.utils.ListaObj;
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

    public ListaObj<ModuleLessonModel> getAllModuleLessonByModuleId(UUID moduleId) {
        List<ModuleLessonModel> moduleLessons = moduleLessonRepository.findAllByModule_Id(moduleId);
        ListaObj<ModuleLessonModel> moduleLessonsOrdered = new ListaObj<>(moduleLessons.size());

        for (ModuleLessonModel module : moduleLessons) {
            moduleLessonsOrdered.adiciona(module);
        }

        ModuleLessonModel m = null;
        int indiceMenor = 0;
        for (int i = 0; i < moduleLessonsOrdered.getTamanho() - 1; i++) {
            indiceMenor = i;
            for (int j = i + 1; j < moduleLessonsOrdered.getTamanho(); j++) {
                m = moduleLessonsOrdered.getElemento(j);
                if (m.getLessonOrder() < moduleLessonsOrdered.getElemento(indiceMenor).getLessonOrder()) {
                    indiceMenor = j;
                }
            }
            ModuleLessonModel aux = moduleLessonsOrdered.getElemento(i);
            moduleLessonsOrdered.setElemento(moduleLessonsOrdered.getElemento(indiceMenor), i);
            moduleLessonsOrdered.setElemento(aux, indiceMenor);
        }

        return moduleLessonsOrdered;
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

    public List<ModuleLessonUpdateDTO> updateModuleLessons(List<ModuleLessonUpdateDTO> moduleLessonList) {
        if (!moduleLessonList.isEmpty()) {
            for (ModuleLessonUpdateDTO lesson : moduleLessonList) {
                moduleLessonRepository.update(lesson.getId(), lesson.getLessonOrder(), lesson.getContentDescription());
            }

            return moduleLessonList;
        }

        return null;
    }
}