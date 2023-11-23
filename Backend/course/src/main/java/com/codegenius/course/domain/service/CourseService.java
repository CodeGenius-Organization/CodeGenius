package com.codegenius.course.domain.service;

import com.codegenius.course.domain.dto.CourseCreationDTO;
import com.codegenius.course.domain.dto.CourseCsvDTO;
import com.codegenius.course.domain.dto.CourseMapper;
import com.codegenius.course.domain.model.CategoryModel;
import com.codegenius.course.domain.model.CourseModel;
import com.codegenius.course.domain.model.LanguageModel;
import com.codegenius.course.domain.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
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
        LanguageModel language = languageService.findLanguageById(languageId);
        return this.courseRepository.findByLanguages_Id(language.getId());
    }

    public List<CourseModel> getCoursesByCategory(String categoryName) {
//        CategoryModel category = categoryService.findCategoryByName(categoryName);
        return this.courseRepository.findByCategories_Category(categoryName);
    }

    public List<CourseModel> getAvailableCourses() {
        return this.courseRepository.findByAvailableIsTrue();
    }

    public List<CourseModel> getCoursesAvailableByKeyword(String keyword) {
        List<CourseModel> courses = courseRepository.findByAvailableIsTrueAndTitleContaining(keyword);
        if (courses.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "Não existem cursos contendo a palavra-chave " + keyword);
        }

        return courses;
    }

    public void deleteCourseById(UUID courseId) {
        Optional<CourseModel> course = this.courseRepository.findById(courseId);

        if (course.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Curso de ID " + courseId + " não encontrado.");

        this.courseRepository.deleteById(courseId);
    }

    public List<CourseModel> createCourses(List<CourseModel> listaCurso){
       return this.courseRepository.saveAll(listaCurso);
    }

    public List<CourseCsvDTO> getCourseCsv(){
        return this.courseRepository.pegarAllCsv();
    }

    public boolean existsById(UUID courseId) {
        return courseRepository.existsById(courseId);
    }

    public CourseModel updateCourse(UUID courseId, CourseCreationDTO newCourse) {
        Optional<CourseModel> course = courseRepository.findById(courseId);
        List<LanguageModel> languages = languageService.findLanguageByIdIn(newCourse.getLanguageIds());
        List<CategoryModel> categories = categoryService.findCategoryByIdIn(newCourse.getCategoryIds());

        if (newCourse.getTitle() != null)
            course.get().setTitle(newCourse.getTitle());

        if (newCourse.getCourseDescription() != null)
            course.get().setCourseDescription(newCourse.getCourseDescription());

        if (newCourse.getContentDescription() != null)
            course.get().setContentDescription(newCourse.getContentDescription());

        if (newCourse.getAvailable() != null)
            course.get().setAvailable(newCourse.getAvailable());

        if (!languages.isEmpty())
            course.get().setLanguages(new HashSet<>(languages));

        if (!categories.isEmpty())
            course.get().setCategories(new HashSet<>(categories));

        return this.courseRepository.save(course.get());
    }

    public void updateCourseImage(UUID courseId, byte[] image) {
        Optional<CourseModel> course = courseRepository.findById(courseId);
        if (course.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Curso de ID " + courseId + " não existe");
        }

        courseRepository.updateCourseImage(courseId, image);
    }

    public CourseModel getCourseById(UUID courseId) {
        return courseRepository.findById(courseId).get();
    }

    public byte[] getCourseImageById(UUID courseId) {
        Optional<CourseModel> course = courseRepository.findById(courseId);

        if (course.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Curso de ID " + courseId + " não existe");
        }

        return courseRepository.getCourseImage(courseId);
    }
}
