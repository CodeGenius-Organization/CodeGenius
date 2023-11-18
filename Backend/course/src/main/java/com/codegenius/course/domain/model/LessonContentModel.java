package com.codegenius.course.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

@Entity
@Table(name = "lesson_content")
public class LessonContentModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @Column(name = "lesson_content_id", length = 16, columnDefinition = "uuid")
    private UUID id;

    @Column(name = "title", nullable = false, length = 45)
    @NotBlank
    private String title;

    @Column(name = "content", nullable = false, length = 1200)
    private String content;

    @Column(name = "media", columnDefinition = "BLOB")
    private byte[] media;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "module_lesson_fk")
    private ModuleLessonModel moduleLesson;

}
