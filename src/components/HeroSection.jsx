import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
export default function HeroSection() {
  const nav = useNavigate();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to the Ultimate Quiz!</h1>
        <p>Test your knowledge, track your score, and challenge yourself.</p>
        <button onClick={()=>nav('/quiz')} className="cta">Start Quiz</button>
      </div>
      <div className="hero-image">
        <img src="/src/assets/quiz-illustration.svg" alt="Quiz Illustration" />
      </div>
    </section>
  );
}
