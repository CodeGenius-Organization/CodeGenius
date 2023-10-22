package com.codegenius.course.domain.dto;

import java.util.UUID;

public class ModuleLessonUpdateDTO {
    private UUID id;

    private Integer lessonOrder;

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
