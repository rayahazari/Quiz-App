import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">QuizApp</div>
      <button className="hamburger" onClick={()=>setOpen(o=>!o)}>☰</button>
      <ul className={`nav-links ${open? 'open': ''}`}>
        {['/', '/quiz', '/leaderboard', '/about'].map((p,i)=>
          <li key={i}><Link onClick={()=>setOpen(false)} to={p}>
            {['Home','Start Quiz','Leaderboard','About'][i]}
          </Link></li>
        )}
      </ul>
    </nav>
);
}
