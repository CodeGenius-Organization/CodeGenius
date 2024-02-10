package com.codegenius.course.domain.repository;

import com.codegenius.course.domain.dto.CourseCsvDTO;
import com.codegenius.course.domain.model.CourseModel;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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

    @Query("""
            select new com.codegenius.course.domain.dto.CourseCsvDTO(c.title,c.courseDescription, c.contentDescription, c.available) from CourseModel c
            """)
    List<CourseCsvDTO> pegarAllCsv();

    @Modifying
    @Transactional
    @Query("""
            UPDATE CourseModel c SET c.image = ?2
            WHERE c.id = ?1
            """)
    void updateCourseImage(UUID courseId, byte[] image);

    @Query("SELECT c.image FROM CourseModel c WHERE c.id = ?1")
    byte[] getCourseImage(UUID courseId);

    @Query(nativeQuery = true, value =
            """
            SELECT
                    c.*,
                    cc.*,
                    cat.*
            FROM course c
            JOIN course_categories cc
                ON cc.course_fk = c.course_id
            JOIN category cat
                ON cat.category = :categoryName
            ORDER BY
                CASE
                    WHEN :ordering = 'ASC' THEN c.title
                    ELSE NULL
                END ASC,
                CASE
                    WHEN :ordering = 'DESC' THEN c.title
                    ELSE NULL
                END DESC
            LIMIT 10 OFFSET :position
            """)
    //WHEN ?2 = 'STAR' THEN ordenar por avaliacao de curso
    List<CourseModel> findByCategories_Category_OrderBy(@Param("categoryName") String categoryName, @Param("ordering") String ordering, @Param("position") Integer position);
}
