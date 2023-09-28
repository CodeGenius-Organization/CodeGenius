package com.codegenius.course.domain.repository;

import com.codegenius.course.domain.model.CourseModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Repository interface for managing course data.
 *
 * @author hidek
 * @since 2023-09-028
 */
public interface CourseRepository extends JpaRepository<CourseModel, UUID> {
}
