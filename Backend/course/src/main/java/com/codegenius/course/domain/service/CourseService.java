package com.codegenius.course.domain.service;

import com.codegenius.course.domain.dto.CourseCreationDTO;
import com.codegenius.course.domain.dto.CourseCsvDTO;
import com.codegenius.course.domain.dto.CourseMapper;
import com.codegenius.course.domain.model.CategoryModel;
import com.codegenius.course.domain.model.CourseModel;
import com.codegenius.course.domain.model.LanguageModel;
import com.codegenius.course.domain.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LanguageService languageService;

    @Autowired
    private CategoryService categoryService;

    public CourseModel createCourse(CourseCreationDTO courseCreationDTO) {
        List<LanguageModel> languages = languageService.findLanguageByIdIn(courseCreationDTO.getLanguageIds());
        List<CategoryModel> categories = categoryService.findCategoryByIdIn(courseCreationDTO.getCategoryIds());

        final CourseModel newCourse = CourseMapper.of(courseCreationDTO, languages, categories);
        return this.courseRepository.save(newCourse);
    }

    public List<CourseModel> getAllCourses() {
        return this.courseRepository.findAll();
    }

    public List<CourseModel> getCoursesByLanguage(UUID languageId) {
        return this.courseRepository.findByLanguages_Id(languageId);
    }

    public List<CourseModel> getCoursesByCategory(UUID categoryId) {
        return this.courseRepository.findByCategories_Id(categoryId);
    }

    public List<CourseModel> getAvailableCourses() {
        return this.courseRepository.findByAvailableIsTrue();
    }

    public List<CourseModel> getCoursesAvailableByKeyword(String keyword) {
        return this.courseRepository.findByAvailableIsTrueAndTitleContaining(keyword);
    }

    public void deleteCourseById(UUID courseId) {
        Optional<CourseModel> course = this.courseRepository.findById(courseId);

        if (course.isEmpty())
            throw new IllegalStateException();

        this.courseRepository.deleteById(courseId);
    }

    public List<CourseModel> createCourses(List<CourseModel> listaCurso){
       return this.courseRepository.saveAll(listaCurso);
    }

    public List<CourseCsvDTO> getCourseCsv(){
        return this.courseRepository.pegarAllCsv();
    }
}
