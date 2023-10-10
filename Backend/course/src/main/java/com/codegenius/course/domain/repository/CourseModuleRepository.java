package com.codegenius.course.domain.repository;

import com.codegenius.course.domain.model.CourseModuleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CourseModuleRepository extends JpaRepository<CourseModuleModel, UUID> {

    List<CourseModuleModel> findAllByCourse_IdOrderByModuleOrderAsc(UUID id);
}
