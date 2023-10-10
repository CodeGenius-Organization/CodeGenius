package com.codegenius.course.domain.service;

import com.codegenius.course.domain.model.CategoryModel;
import com.codegenius.course.domain.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public CategoryModel createCategory(CategoryModel category) {
        return this.categoryRepository.save(category);
    }

    public List<CategoryModel> findCategoryByIdIn(List<UUID> ids) {
        return this.categoryRepository.findCategoryByIdIn(ids);
    }

    public List<CategoryModel> getAllCategories() {
        return this.categoryRepository.findAll();
    }
}
