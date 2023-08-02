package com.example.kafkademo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.text.DecimalFormat;

@SpringBootApplication
public class KafkaDemoApplication {

    public static void main(String[] args) {
        double t = 434243242.54354354;
        DecimalFormat df = new DecimalFormat("#.###");
        Double afterFormat = Double.valueOf(df.format(t));
        System.out.println(df.format(afterFormat));
        SpringApplication.run(KafkaDemoApplication.class, args);
    }

}
