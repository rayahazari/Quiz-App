import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScoreSummary() {
  const { attempt } = useLocation().state;
  const nav = useNavigate();

  const msg = attempt.score / attempt.total > 0.8
    ? '🎉 Quiz Champion!' : '🤔 More caffeine, maybe?';

  return (
    <div className="summary">
      <h2>{msg}</h2>
      <p>Name: {attempt.name}</p>
      <p>Score: {attempt.score} / {attempt.total}</p>
      <p>Time Taken: {attempt.timeTaken}s</p>
      <button onClick={()=>nav('/')}>Play Again</button>
    </div>
  );
}
