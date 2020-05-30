package com.trabajopractico5.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BaseServiceImpl<E, R extends JpaRepository<E, Integer>> implements BaseService<E> {

    @Autowired
    private R repository;

    @Override
    public List<E> findAll() throws Exception {
        try {
            return repository.findAll();
        } catch (Exception e) {
            throw new Exception();
        }
    }

    @Override
    public E findById(Integer id) throws Exception {
        Optional<E> entityOptional = repository.findById(id);
        try {
            if (entityOptional.isPresent()) {
                return entityOptional.get();
            } else {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }


    @Override
    public E save(E entityForm) throws Exception {
        try {
            return repository.save(entityForm);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public E update(Integer id, E entityForm) throws Exception {
        try {
            Optional<E> entityOptional = repository.findById(id);
            E entity = entityOptional.get();
            entity = repository.save(entityForm);
            return entity;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public void delete(Integer id) throws Exception {
        try {
            if (repository.existsById(id)) {
                repository.deleteById(id);
            } else {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new Exception();
        }
    }

    @Override
    public void saveFile(MultipartFile file) throws IOException {
        if(!file.isEmpty()){
            Path path = Paths.get(".//src//main//resources//images//" + file.getOriginalFilename());
            Files.write(path, file.getBytes());
        }
    }
}