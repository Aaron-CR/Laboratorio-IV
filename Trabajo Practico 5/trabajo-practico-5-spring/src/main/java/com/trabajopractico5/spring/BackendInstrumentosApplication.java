package com.trabajopractico5.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class BackendInstrumentosApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendInstrumentosApplication.class, args);
    }

}
