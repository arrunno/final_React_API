package com.arunas.hometasks.api.controller;

import com.arunas.hometasks.api.dto.UserDto;
import com.arunas.hometasks.api.entity.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.arunas.hometasks.api.ApiPath.LOGIN;

@RestController
@RequestMapping(LOGIN)
public class LoginController {

    @PostMapping
    public UserDto login(@AuthenticationPrincipal User user) {  //// cia paprastesnis budas paimti useri is Principal
        return new UserDto(user);
    }



}
