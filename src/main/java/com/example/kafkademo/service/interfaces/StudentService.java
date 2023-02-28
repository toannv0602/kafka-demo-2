package com.example.kafkademo.service.interfaces;

import com.example.kafkademo.model.Student;

public interface StudentService {

    void pushQueue(Student student) throws Exception;

}
