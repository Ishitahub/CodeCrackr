import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to CodeCrackr</h1>
        <p>Sharpen your coding skills with interactive challenges</p>
      </section>
      <section className="description">
        <h2>What is CodeCrackr?</h2>
        <p>
          CodeCrackr is an online platform that lets you solve real coding problems,
          track your progress, and compete with others on the leaderboard.
        </p>
        <p>
          Whether you're a beginner or advanced coder, you'll find fun and rewarding challenges here.
        </p>
      </section>
      <section className="info-section">
  <h2>Why Use CodeCrackr?</h2>
  <p>
    CodeCrackr offers a curated set of programming problems, real-time leaderboards to track your progress, and a sleek, responsive interface designed for seamless learning. With a focus on interactive challenges and performance tracking, it’s built to help you grow as a developer — one problem at a time.
  </p>
</section>

    </div>
  );
};

export default Home;
