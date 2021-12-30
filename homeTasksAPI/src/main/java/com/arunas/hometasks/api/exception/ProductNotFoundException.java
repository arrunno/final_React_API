package com.arunas.hometasks.api.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@Getter
@AllArgsConstructor
public class ProductNotFoundException extends RuntimeException{
    private final UUID id;
}
