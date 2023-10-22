package com.codegenius.course.controller;

import com.codegenius.course.domain.dto.CourseCreationDTO;
import com.codegenius.course.domain.dto.CourseCsvDTO;
import com.codegenius.course.domain.model.CourseModel;
import com.codegenius.course.domain.service.CourseService;
import com.codegenius.course.utils.Arquivo;
import com.codegenius.course.utils.GerenciadorDeArquivosCourseCsv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/")
    public ResponseEntity<CourseModel> createCourse(@RequestBody CourseCreationDTO courseCreationDTO) {
        return ResponseEntity.status(201).body(this.courseService.createCourse(courseCreationDTO));
    }

    @GetMapping("/")
    public ResponseEntity<List<CourseModel>> getAllCourses() {
        return ResponseEntity.status(200).body(this.courseService.getAllCourses());
    }

    @GetMapping("/available")
    public ResponseEntity<List<CourseModel>> getAvailableCourses() {
        return ResponseEntity.status(200).body(this.courseService.getAvailableCourses());
    }

    @GetMapping("/available/{keyword}")
    public ResponseEntity<List<CourseModel>> getCoursesAvailableByKeyword(@PathVariable String keyword) {
        return ResponseEntity.status(200).body(this.courseService.getCoursesAvailableByKeyword(keyword));
    }

//    @GetMapping("/popularity")
//    public ResponseEntity<List<Course>> getCoursesByPopularity() {
//        return ResponseEntity.status(200).body(this.courseService.getCoursesByPopularity());
//    }

    @GetMapping("/language/{languageId}")
    public ResponseEntity<List<CourseModel>> getCoursesByLanguage(@PathVariable UUID languageId) {
        return ResponseEntity.status(200).body(this.courseService.getCoursesByLanguage(languageId));
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<CourseModel>> getCoursesByCategory(@PathVariable UUID categoryId) {
        return ResponseEntity.status(200).body(this.courseService.getCoursesByCategory(categoryId));
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<Void> deleteCourseById(@PathVariable UUID courseId) {
        this.courseService.deleteCourseById(courseId);

        return ResponseEntity.status(200).build();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<List<CourseModel>> postCourseCadastrarCsv(@RequestBody Arquivo arquivo) {



        List<CourseModel> guardarArquivo = GerenciadorDeArquivosCourseCsv.importarArquivoCsv(arquivo.getNomeArq());
        return ResponseEntity.status(200).body(this.courseService.createCourses(guardarArquivo));
    }

    @GetMapping("/exportar-csv")
    public ResponseEntity<List<CourseCsvDTO>> getCourseCsv(){
        List<CourseCsvDTO> lista = courseService.getCourseCsv();

        if(lista.isEmpty()){
            return ResponseEntity.status(204).build();
        }
        GerenciadorDeArquivosCourseCsv.gravaArquivoCsv(lista, "Cursos");
        return ResponseEntity.status(200).build();
    }
}