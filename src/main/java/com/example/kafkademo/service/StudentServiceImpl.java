package com.example.kafkademo.service;

import com.example.kafkademo.model.Student;
import com.example.kafkademo.service.interfaces.StudentService;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Override
    public void pushQueue(Student student) throws Exception{

    }
}
