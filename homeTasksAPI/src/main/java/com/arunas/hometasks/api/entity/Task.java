package com.arunas.hometasks.api.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * @author Andrius Baltrunas
 */
@Setter
@Getter
@Entity
@NoArgsConstructor
@Table(name = "Tasks")
public class Task {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;
    @NotBlank
    private String category;
    @NotBlank
    private String name;
    private int status;
    private String doer;
    private int value;
    private LocalDateTime timeOfRegistration;
    @Nullable
    private LocalDateTime finishTime;
}
