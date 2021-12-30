package com.arunas.hometasks.api.service;

import com.arunas.hometasks.api.exception.ProductNotFoundException;
import com.arunas.hometasks.api.entity.Task;
import com.arunas.hometasks.api.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public void createTask(Task task) {
        taskRepository.save(task);
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task getTask(UUID id) {
        return taskRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    }

    public void updateTask(Task task) {
        taskRepository.save(task);
    }

    public void deleteTask(UUID id) {
        taskRepository.deleteById(id);
    }

}
