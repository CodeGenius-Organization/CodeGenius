package com.codegenius.course.controller;

import com.codegenius.course.domain.model.CategoryModel;
import com.codegenius.course.domain.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/{category}")
    public ResponseEntity<CategoryModel> createCategory(@PathVariable String category) {
        CategoryModel newCategory = new CategoryModel(category);
        return ResponseEntity.status(201).body(this.categoryService.createCategory(newCategory));
    }

    @GetMapping("/")
    public ResponseEntity<List<CategoryModel>> getAllCategories() {
        return ResponseEntity.status(200).body(this.categoryService.getAllCategories());
    }
}
