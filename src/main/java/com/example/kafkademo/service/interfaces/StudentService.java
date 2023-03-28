package com.example.kafkademo.service.interfaces;

import com.example.kafkademo.model.Student;

import java.util.List;

public interface StudentService {

    void pushQueue(Student student) throws Exception;

    List<Student> getAll() throws Exception;

}
