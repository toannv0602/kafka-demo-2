package com.example.kafkademo.service;

import com.example.kafkademo.model.Student;
import com.example.kafkademo.service.interfaces.StudentService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    static final Gson gson = new Gson();

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    private void sendMessage(String msg) {
        kafkaTemplate.send("test", msg);
    }

    @Override
    public void pushQueue(Student student) throws Exception{
        System.out.println("STUDENT REQUST: "+ gson.toJson(student));
        sendMessage( gson.toJson(student));
    }
}
