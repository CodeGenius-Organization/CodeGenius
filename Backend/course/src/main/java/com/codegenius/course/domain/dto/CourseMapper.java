package com.codegenius.course.domain.dto;

import com.codegenius.course.domain.model.CategoryModel;
import com.codegenius.course.domain.model.CourseModel;
import com.codegenius.course.domain.model.LanguageModel;

import java.util.HashSet;
import java.util.List;

public class CourseMapper {

    public static CourseModel of(CourseCreationDTO courseCreationDTO, List<LanguageModel> languages, List<CategoryModel> categories) {


        CourseModel course = new CourseModel();

        course.setTitle(courseCreationDTO.getTitle());

        course.setCourseDescription(courseCreationDTO.getCourseDescription());
        course.setContentDescription(courseCreationDTO.getContentDescription());

        course.setImage(courseCreationDTO.getImage());
        course.setAvailable(courseCreationDTO.getAvailable());

        course.setLanguages(new HashSet<>(languages));
        course.setCategories(new HashSet<>(categories));



        return course;
    }
}
