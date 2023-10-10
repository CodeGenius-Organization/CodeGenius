package com.codegenius.course.domain.repository;

import com.codegenius.course.domain.model.CourseModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

/**
 * Repository interface for managing course data.
 *
 * @author hidek
 * @since 2023-09-028
 */
public interface CourseRepository extends JpaRepository<CourseModel, UUID> {

    List<CourseModel> findByLanguages_Id(UUID id);

    List<CourseModel> findByCategories_Id(UUID id);

    List<CourseModel> findByAvailableIsTrue();

    List<CourseModel> findByAvailableIsTrueAndTitleContaining(String keyword);
}
