package com.codegenius.course.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;


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
    @Column(name = "course_id", length = 16, columnDefinition = "uuid")
    private UUID id;

    @Column(name = "title", length = 45, nullable = false)
    private String title;

    @Column(name = "course_description", length = 100, nullable = false)
    private String courseDescription;

    @Column(name = "content_description", length = 100, nullable = false)
    private String contentDescription;

    @Column(name = "image", length = 100, nullable = false)
    private String image;

    @Column(name = "available", nullable = false)
    private Boolean available;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    }, fetch = FetchType.EAGER)
    @JoinTable(name = "course_languages",
            joinColumns = @JoinColumn(name = "course_fk"),
            inverseJoinColumns = @JoinColumn(name = "language_fk"))
    private Set<LanguageModel> languages = new HashSet<>();

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    }, fetch = FetchType.EAGER)
    @JoinTable(name = "course_categories",
            joinColumns = @JoinColumn(name = "course_fk"),
            inverseJoinColumns = @JoinColumn(name = "category_fk"))
    private Set<CategoryModel> categories = new HashSet<>();

    @OneToMany(
            mappedBy = "course",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<CourseModuleModel> modules = new HashSet<>();

}
