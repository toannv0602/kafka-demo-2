package com.example.kafkademo.service;

import com.example.kafkademo.model.Student;
import com.example.kafkademo.service.interfaces.StudentService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class StudentServiceImpl implements StudentService {

    static final Gson gson = new Gson();

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    private List<Student>  studentList = new ArrayList<>();

    public KafkaTemplate<String, String> getKafkaTemplate() {
        return kafkaTemplate;
    }

    public void setKafkaTemplate(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    private void sendMessage(String msg) {
        kafkaTemplate.send("toannv", msg);
    }
    private void sendNotify(String msg) {
        kafkaTemplate.send("notify", UUID.randomUUID().toString(),msg);
    }

//    private void sendNotify2(String msg) {
//        kafkaTemplate.send("notify2", msg);
//    }


    @Override
    public void pushQueue(Student student) throws Exception{
        System.out.println("STUDENT REQUST: "+ gson.toJson(student));
        sendMessage( gson.toJson(student));
//        sendNotify( "Có thêm sinh viên: "+student.getName());
//        sendNotify2( "Có thêm sinh viên2: "+student.getName());
        studentList.add(student);
    }

    @Override
    public List<Student> getAll() throws Exception {
        return studentList;
    }
}
