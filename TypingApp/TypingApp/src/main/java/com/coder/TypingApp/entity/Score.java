package com.coder.TypingApp.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "scores")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private int wpm;
    private double accuracy;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getWpm() {
        return wpm;
    }

    public void setWpm(int wpm) {
        this.wpm = wpm;
    }

    public double getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(double accuracy) {
        this.accuracy = accuracy;
    }

    @Override
    public String toString() {
        return "Score{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", wpm=" + wpm +
                ", accuracy=" + accuracy +
                '}';
    }
}