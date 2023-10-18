package com.codegenius.course.domain.repository;

import com.codegenius.course.domain.model.ModuleLessonModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ModuleLessonRepository extends JpaRepository<ModuleLessonModel, UUID> {

    List<ModuleLessonModel> findAllByModule_Id(UUID id);

}
