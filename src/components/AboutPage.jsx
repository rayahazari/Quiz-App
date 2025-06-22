// import React from 'react';
// export default function AboutPage() {
//   return (
//     <div className="about">
//       <h2>About This App</h2>
//       <p>This quiz app was built with React, React-Router, and CSS animations.</p>
//       <p>What I learned:</p>
//       <ul>
//         <li>State management with hooks</li>
//         <li>Client-side routing</li>
//         <li>Animating with CSS keyframes</li>
//         <li>Persisting data in localStorage</li>
//       </ul>
//       <p>So, how do I react to React, you ask? Well, I am Hooked!</p>
//     </div>
//   );
// }
import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About the App</h1>
        <p>Discover what makes this quiz app awesome and fun to use!</p>
      </div>

      <div className="about-section">
        <div className="about-card">
          <h2>About This App</h2>
          <p>This quiz app was built with React, React-Router, and CSS animations.</p>
        </div>

        <div className="about-card">
          <h2>What I Learned</h2>
          <ul>
            <li>State management with hooks</li>
            <li>Client-side routing</li>
            <li>Animating with CSS keyframes</li>
            <li>Persisting data in localStorage</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>React to React?</h2>
          <p className="react-joke">So, how do I react to React, you ask? <strong>Well, I am Hooked!</strong></p>
        </div>
      </div>
    </div>
  );
}
