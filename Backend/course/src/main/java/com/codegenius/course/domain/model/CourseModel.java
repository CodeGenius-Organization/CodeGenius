package com.codegenius.course.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.UUID;


/**
 * Entity class representing a course.
 *
 * @author hidek
 * @since 2023-09-28
 */
@Entity
@Table(name = "course")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @Column(name = "id_course", length = 16, columnDefinition = "uuid")
    private UUID id;
    @Column(name = "title", length = 45, nullable = false)
    private String title;
    @Column(name = "course_description", length = 100, nullable = false)
    private String courseDescription;
    @Column(name = "content_description", length = 100, nullable = false)
    private String contentDescription;
    @Column(name = "image", length = 100, nullable = false)
    private Boolean image;
    @Column(name = "available", nullable = false)
    private Boolean available;
}
