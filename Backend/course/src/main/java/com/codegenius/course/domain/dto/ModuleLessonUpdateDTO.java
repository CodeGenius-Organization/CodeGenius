package com.codegenius.course.domain.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public class ModuleLessonUpdateDTO {
    @NotNull
    private UUID id;
    @NotNull
    private Integer lessonOrder;
    @NotBlank
    private String contentDescription;

    public ModuleLessonUpdateDTO(UUID id, Integer lessonOrder, String contentDescription) {
        this.id = id;
        this.lessonOrder = lessonOrder;
        this.contentDescription = contentDescription;
    }

    public UUID getId() {
        return id;
    }

    public Integer getLessonOrder() {
        return lessonOrder;
    }

    public String getContentDescription() {
        return contentDescription;
    }
}
