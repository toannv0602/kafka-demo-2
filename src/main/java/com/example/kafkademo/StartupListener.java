package com.example.kafkademo;

import com.example.kafkademo.model.Student;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class StartupListener implements ApplicationRunner {

    static final Gson gson = new Gson();

    @Autowired
    SimpMessagingTemplate template;

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessage(String msg) {
        kafkaTemplate.send("test", msg);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
//        Student student = new Student(1, "toannv", "Thai Nguyen");
//        for (int i = 1; i < 1000; i++) {
//            student.setId(i);
//            student.setName("ToanNV "+ i);
//            sendMessage(gson.toJson(student));
//            Thread.sleep(5000);
//        }
    }

    @KafkaListener(topics = "test", groupId = "group-id")
    public void listen(String message) {
        System.out.println("Received Message in group - group-id: " + message);
        template.convertAndSend("topic", message);
    }
}
