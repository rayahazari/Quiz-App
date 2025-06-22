import React, { useEffect, useState } from 'react';
import { questions } from '../data/questions';
import { loadPlayer, saveScoreAttempt } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

export default function QuizEngine() {
  const player = loadPlayer();
  const pool = questions.filter(
    q => q.category === player.category && q.difficulty === player.difficulty
  );

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timeTaken, setTimeTaken] = useState(0); // Tracks total time
  const nav = useNavigate();

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t =>
        t > 0
          ? t - 1
          : (() => {
              clearInterval(timer);
              handleNext(); // Auto move to next question if time runs out
              return 0;
            })()
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [idx]);

  // Handle answer selection
  const handleSelect = opt => {
    setSelected(opt);
    if (opt === pool[idx].answer) {
      setScore(s => s + 1);
    }
  };

  // Advance to next question or finish quiz
  const handleNext = () => {
    setTimeTaken(t => t + (15 - timeLeft)); // Accumulate time spent on the current question
    setSelected('');
    if (idx + 1 < pool.length) {
      setIdx(i => i + 1);
      setTimeLeft(15);
    } else {
      const attempt = {
        name: player.name,
        score,
        total: pool.length,
        timeTaken, // Use accumulated time
        date: new Date().toLocaleString(),
      };
      saveScoreAttempt(attempt);
      nav('/summary', { state: { attempt } });
    }
  };

  return (
    <div className="quiz-engine">
      <h3>
        Q{idx + 1}/{pool.length}: {pool[idx].question}
      </h3>
      <div className="options">
        {pool[idx].options.map(opt => (
          <button
            key={opt}
            disabled={!!selected}
            className={
              selected
                ? opt === pool[idx].answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <div>Time Left: {timeLeft}s</div>
      {selected && <button onClick={handleNext}>Next</button>}
    </div>
  );
}
