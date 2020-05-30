package com.trabajopractico5.spring.controllers;

import com.trabajopractico5.spring.entities.InstrumentoEntity;
import com.trabajopractico5.spring.services.InstrumentoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/instrumentos")
public class InstrumentoController extends BaseController<InstrumentoEntity, InstrumentoService>{

}
