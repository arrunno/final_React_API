package com.arunas.hometasks.api;

public interface ApiPath {
    String ID_VARIABLE = "id";
    String TASKS = "/tasks";
    String TASK = "/{" + ID_VARIABLE + "}";
    String LOGIN = "/login";
}
