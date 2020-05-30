package com.trabajopractico5.spring.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface BaseService<E> {

    List<E> findAll() throws Exception;

    E findById(Integer id) throws Exception;

    E save(E entity) throws Exception;

    E update(Integer id, E entity) throws Exception;

    void delete(Integer id) throws Exception;

    void saveFile(MultipartFile file) throws IOException;

}