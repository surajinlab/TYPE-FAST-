package com.coder.TypingApp.service;

import com.coder.TypingApp.entity.Score;
import com.coder.TypingApp.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository repository;

    public Score saveScore(Score score) {
        return repository.save(score);
    }

    public List<Score> leaderboard() {
        return repository.findTop10ByOrderByWpmDesc();
    }
}
