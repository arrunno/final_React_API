package com.arunas.hometasks.api.dto;

import com.arunas.hometasks.api.entity.Role;
import com.arunas.hometasks.api.entity.User;
import lombok.Data;

import java.util.Set;
import java.util.stream.Collectors;

@Data
public class UserDto {
    private String username;
    private String fullName;
    private Set<String> roles;

    public UserDto(User user) {
        this.username = user.getUsername();
        this.fullName = user.getFullName();
        this.roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
    }
}
