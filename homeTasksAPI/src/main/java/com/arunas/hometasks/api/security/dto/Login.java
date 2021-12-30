package com.arunas.hometasks.api.security.dto;

import lombok.Data;


//// Data transfer Object - kad entity nenukeliautu toliau nei iki serviso - tarpinis sluoksnis
@Data
public class Login {

    private String username;
    private String password;

}
