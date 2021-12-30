package com.arunas.hometasks.api.controller;
import static com.arunas.hometasks.api.ApiPath.*;
import com.arunas.hometasks.api.entity.Task;
import com.arunas.hometasks.api.service.TaskService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import static org.springframework.http.MediaType.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(TASKS)
@Api(tags = "Hometasks task controller")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @ApiOperation(value = "Gauti visas užduotis", tags = "getTasks", httpMethod = "GET")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Duomenys sekmingai uzkrauti"),
            @ApiResponse(code = 403, message = "Vartotojas neturi teisiu"),
            @ApiResponse(code = 404, message = "Nepavyko rasti užduočių")

    })
    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @GetMapping(value = TASK, produces = APPLICATION_JSON_VALUE)
    public Task getTask(@PathVariable(ID_VARIABLE) UUID id) {
        return taskService.getTask(id);
    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createTask(@RequestBody Task task) {
        taskService.createTask(task);
    }

    @PutMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateTask(@RequestBody Task task) {
        taskService.updateTask(task);
    }

    @DeleteMapping(TASK)
    @ResponseStatus(HttpStatus.NO_CONTENT)
        public void deleteTask(@PathVariable(ID_VARIABLE) UUID id){
            taskService.deleteTask(id);
        }

}

