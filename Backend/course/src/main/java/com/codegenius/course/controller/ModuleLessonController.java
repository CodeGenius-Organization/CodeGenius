package com.codegenius.course.controller;

import com.codegenius.course.domain.model.ModuleLessonModel;
import com.codegenius.course.domain.service.ModuleLessonService;
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
    public ResponseEntity<ModuleLessonModel> createModuleLesson(@RequestParam UUID moduleId, @RequestBody ModuleLessonModel moduleLesson) {
        ModuleLessonModel newModuleLesson = moduleLessonService.createModuleLesson(moduleId, moduleLesson);
        return newModuleLesson != null ? ResponseEntity.status(201).body(newModuleLesson) : ResponseEntity.status(400).build();
    }

    @GetMapping("/{moduleId}/lessons")
    public ResponseEntity<List<ModuleLessonModel>> getAllModuleLessonByModuleId(@RequestParam UUID moduleId) {
        List<ModuleLessonModel> moduleLessons = moduleLessonService.getAllModuleLessonByModuleId(moduleId);

        return !moduleLessons.isEmpty() ? ResponseEntity.status(200).body(moduleLessons) : ResponseEntity.status(204).build();
    }

    @PutMapping("/lessons/{lessonId}")
    public ResponseEntity<ModuleLessonModel> updateModuleLesson(@RequestParam UUID lessonId, @RequestBody ModuleLessonModel moduleLesson) {
        ModuleLessonModel newModuleLesson = moduleLessonService.updateModuleLesson(lessonId, moduleLesson);
        return newModuleLesson != null ? ResponseEntity.status(200).body(newModuleLesson) : ResponseEntity.status(400).build();
    }

    @DeleteMapping("/lessons/{lessonId}")
    public ResponseEntity<Void> deleteModuleLesson(@RequestParam UUID lessonId) {
        boolean deleted = moduleLessonService.deleteModuleLesson(lessonId);

        return deleted ? ResponseEntity.status(200).build() : ResponseEntity.status(404).build();
    }
}
