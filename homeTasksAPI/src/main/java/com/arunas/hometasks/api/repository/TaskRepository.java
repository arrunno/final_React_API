package com.arunas.hometasks.api.repository;

import com.arunas.hometasks.api.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
    List<Task> findByNameLikeOrCategoryLike(String name, String category);

//    @Query("select p from Task p where p.name like %:text% or p.description like %:text%")
//    List<Task> findLike(@Param("text") String text);
}
