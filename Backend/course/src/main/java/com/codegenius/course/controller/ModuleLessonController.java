package com.codegenius.course.controller;

import com.codegenius.course.domain.dto.ModuleLessonUpdateDTO;
import com.codegenius.course.domain.model.ModuleLessonModel;
import com.codegenius.course.domain.service.ModuleLessonService;
import com.codegenius.course.utils.GerenciadorDeArquivosLessonCsv;
import com.codegenius.course.utils.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class ModuleLessonController {

    @Autowired
    private ModuleLessonService moduleLessonService;

    @PostMapping("/{moduleId}/lessons")
    public ResponseEntity<ModuleLessonModel> createModuleLesson(@PathVariable UUID moduleId, @RequestBody ModuleLessonModel moduleLesson) {
        ModuleLessonModel newModuleLesson = moduleLessonService.createModuleLesson(moduleId, moduleLesson);
        return newModuleLesson != null ? ResponseEntity.status(201).body(newModuleLesson) : ResponseEntity.status(400).build();
    }

    @GetMapping("/{moduleId}/lessons/csv/{nomeArq}")
    public ResponseEntity<Integer> getAllModuleLessonByModuleId(@PathVariable UUID moduleId, @PathVariable String nomeArq) {
        ListaObj<ModuleLessonModel> moduleLessons = moduleLessonService.getAllModuleLessonByModuleId(moduleId);

        if (moduleLessons.getTamanho() > 0) {
            GerenciadorDeArquivosLessonCsv.gravaArquivoCsv(moduleLessons, nomeArq);
        }

        return moduleLessons.getTamanho() > 0 ? ResponseEntity.status(200).body(moduleLessons.getTamanho()) : ResponseEntity.status(204).build();
    }

    @PutMapping("/{moduleId}/lessons")
    public ResponseEntity<List<ModuleLessonUpdateDTO>> updateModuleLessons(@RequestBody List<ModuleLessonUpdateDTO> moduleLessonList, @PathVariable UUID moduleId) {
        List<ModuleLessonUpdateDTO> newModuleLessonList = moduleLessonService.updateModuleLessons(moduleLessonList);
        return !newModuleLessonList.isEmpty() ? ResponseEntity.status(200).body(newModuleLessonList) : ResponseEntity.status(400).build();
    }

    @DeleteMapping("/lessons/{lessonId}")
    public ResponseEntity<Void> deleteModuleLesson(@PathVariable UUID lessonId) {
        boolean deleted = moduleLessonService.deleteModuleLesson(lessonId);

        return deleted ? ResponseEntity.status(200).build() : ResponseEntity.status(404).build();
    }
}
