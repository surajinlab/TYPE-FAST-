package com.coder.TypingApp.controller;

import com.coder.TypingApp.entity.Score;
import com.coder.TypingApp.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
@CrossOrigin(origins = "http://localhost:5173")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PostMapping
    public Score saveScore(@RequestBody Score score) {
        return service.saveScore(score);
    }

    @GetMapping("/leaderboard")
    public List<Score> leaderboard() {
        return service.leaderboard();
    }
}