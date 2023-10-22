package com.codegenius.course.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "module_lesson")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ModuleLessonModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @Column(name = "module_lesson_id", length = 16, columnDefinition = "uuid")
    private UUID id;

    @Column(name = "lesson_order", nullable = false)
    private Integer lessonOrder;

    @Column(name = "content_description", nullable = false)
    private String contentDescription;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_module_fk")
    private CourseModuleModel module;
}