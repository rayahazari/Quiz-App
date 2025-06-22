import React, { useState, useMemo } from 'react';
import { loadHistory } from '../utils/storage';

export default function Leaderboard() {
  const history = loadHistory();
  const [sortBy, setSortBy] = useState('score');

  const sorted = useMemo(() => {
    return [...history].sort((a,b)=>{
      return sortBy==='score'
        ? b.score - a.score
        : a.timeTaken - b.timeTaken;
    });
  }, [history, sortBy]);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <label>
        Sort by:&nbsp;
        <select onChange={e=>setSortBy(e.target.value)} value={sortBy}>
          <option value="score">Score</option>
          <option value="time">Time</option>
        </select>
      </label>
      <ul>
        {sorted.map((u,i)=>(
          <li key={i}>
            {u.name} — Score: {u.score}/{u.total} — Time: {u.timeTaken}s — {u.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
