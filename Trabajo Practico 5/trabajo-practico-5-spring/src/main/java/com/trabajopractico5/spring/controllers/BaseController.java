package com.trabajopractico5.spring.controllers;

import com.trabajopractico5.spring.services.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Transactional
public class BaseController<E, S extends BaseService<E>> {

    @Autowired
    protected S service;

    @GetMapping("")
    public ResponseEntity<?> getAll() {
        try {
            return ResponseEntity.ok().body(service.findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"message\": \"Error. Please try again later.\"}");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok().body(service.findById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"message\": \"Error. Please check the ID, and try again later.\"}");
        }
    }

    @PostMapping("")
    public ResponseEntity<?> post(@RequestBody E entity) {
        try {
            return ResponseEntity.ok().body(service.save(entity));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"message\": \"Error. Please check the BODY request, and try again later.\"}");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> put(@PathVariable Integer id, @RequestBody E entity) {
        try {
            return ResponseEntity.ok().body(service.update(id, entity));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"message\": \"Error. Please check the ID or BODY request, and try again later.\"}");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        try {
            service.delete(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"message\": \"Error. Please check the ID, and try again later.\"}");
        }
        return new ResponseEntity<Object>("{\"message\": \"Success. element deleted.\"}", HttpStatus.OK);
    }

    @PostMapping("/images")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<Object>("{\"message\": \"Error. Please select a file, and try again.\"}", HttpStatus.NO_CONTENT);
        }
        try {
            service.saveFile(file);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<Object>("{\"message\": \"Success. file uploaded.\"}", HttpStatus.OK);
    }

    @GetMapping("/images/{fileName}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource;
        Path path = Paths.get(".//src//main//resources//images//" + fileName);
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        }
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            System.out.println("Unable to determine ContentType.");
        }
        if (contentType == null) {
            contentType = "image/jpeg";
        }
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}
