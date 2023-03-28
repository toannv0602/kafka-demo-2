package com.example.kafkademo.controller;

import com.example.kafkademo.model.Student;
import com.example.kafkademo.service.interfaces.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class KafkaController {

    @Autowired
    StudentService studentService;

    @PostMapping("addStudent")
    public ResponseEntity<?> addStudent(@RequestBody Student student){
        try {
            studentService.pushQueue(student);
            return ResponseEntity.ok("Oke baybe");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Error");
        }
    }

    @GetMapping("allStudent")
    public ResponseEntity<?> allStudent(){
        try {
            return ResponseEntity.ok(studentService.getAll());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Error");
        }
    }

}
