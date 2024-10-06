import React, { useState, useEffect } from 'react';
import '../styles/oceanexplorers.css'

const OceanExplorers = () => {
  const [outputContent, setOutputContent] = useState([]);
  const [quizResult, setQuizResult] = useState('');
  const [timer, setTimer] = useState(null);
  const [phytoplanktonTimer, setPhytoplanktonTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);
  const [phytoplanktonTimeLeft, setPhytoplanktonTimeLeft] = useState(300);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);

  const projects = [
    '1. Create a simple model of a phytoplankton using craft materials!',
    '2. Conduct an experiment to see how different colors of light affect phytoplankton growth.',
    '3. Draw a poster about the role of phytoplankton in the ocean ecosystem.'
  ];

  const facts = [
    '1. Phytoplankton produce about 50% of the world\'s oxygen!',
    '2. They are a crucial part of the ocean food chain, supporting marine life.',
    '3. Phytoplankton can be found in both fresh and salt water.'
  ];

  const handleDisplayContent = (contentArray) => {
    setOutputContent(contentArray);
  };

  const handleQuizResult = (message) => {
    setQuizResult(message);
  };

  const handleLearnMore = () => {
    setMoreInfoVisible(!moreInfoVisible);
  };

  const startTimer = () => {
    setTimeLeft(300);
    if (timer) {
      clearInterval(timer);
    }
    const newTimer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(newTimer);
          alert("Time's up! Hope you enjoyed creating your ocean!");
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    setTimer(newTimer);
  };

  const startPhytoplanktonTimer = () => {
    setPhytoplanktonTimeLeft(300);
    if (phytoplanktonTimer) {
      clearInterval(phytoplanktonTimer);
    }
    const newTimer = setInterval(() => {
      setPhytoplanktonTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(newTimer);
          alert("Time's up! Hope you enjoyed creating your artwork!");
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    setPhytoplanktonTimer(newTimer);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="oceancontainer">
      <h1><span className="wave-icon">🌊</span> Ocean Explorers</h1>
      <h2>Discovering the Secrets of the Sea!</h2>
      <div className="intro">
        <p>The ocean is a mysterious and vital part of our planet! Did you know that the ocean plays a huge role in our weather and the air we breathe? Scientists study the ocean to learn more about how it works, especially the tiny creatures living in it called phytoplankton. Let's dive in and explore some fascinating ocean science projects!</p>
      </div>

      <h2><span className="fish-icon">🐟</span> Explore More!</h2>
      <button className="button" onClick={() => handleDisplayContent(projects)}><span className="lightbulb-icon">💡</span> Fun Ocean Science Projects</button>
      <button className="button" onClick={() => handleDisplayContent(facts)}><span className="fish-icon">🐠</span> Amazing Phytoplankton Facts</button>

      <div id="output" className="fun-facts">
        {outputContent.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <section className="phytoplankton-section">
        <h2><span className="icon">🌿</span> What Are Phytoplankton?</h2>
        <div className="content">
          <p>Phytoplankton are tiny plants that float on the surface of the ocean. They are super important because they:</p>
          <ul>
            <li><span className="icon">🌬️</span> <strong>Produce oxygen:</strong> Just like trees, they give us oxygen to breathe.</li>
            <li><span className="icon">🌍</span> <strong>Help regulate carbon dioxide:</strong> They take in carbon dioxide from the air, which helps keep our planet cool.</li>
          </ul>
        </div>
        <div className="quiz">
          <h3><span className="icon">🧠</span> Can You Guess?</h3>
          <p>What percentage of the world's oxygen do you think phytoplankton produce? Click the correct answer:</p>
          <button className="quiz-btn" onClick={() => handleQuizResult('Oops! Phytoplankton actually produce more oxygen than that.')}>30%</button>
          <button className="quiz-btn" onClick={() => handleQuizResult('Yes! Phytoplankton produce about 50% of the world’s oxygen!')}>50%</button>
          <button className="quiz-btn" onClick={() => handleQuizResult('Too high! It’s actually around 50%.')}>70%</button>
        </div>
        <div id="quiz-result" className="quiz-result">{quizResult}</div>
      </section>

      <section className="nasa-ocean-projects">
        {/* Other sections remain similar, but moved to React components */}
      </section>

      <section id="activities-section">
        <h2>Activities for Kids</h2>
        <div className="activity">
          <h3>DIY Ocean in a Jar</h3>
          <div className="content">
            <h4>What You Need:</h4>
            <div className="icons">
              <div className="icon">🌊</div>
              <div className="icon">🧪</div>
              <div className="icon">💧</div>
              <div className="icon">🟦</div>
              <div className="icon">🥄</div>
            </div>
            <ul>
              <li>A clear jar</li>
              <li>Water</li>
              <li>Blue food coloring</li>
              <li>Vegetable oil</li>
              <li>A straw</li>
            </ul>
          </div>
          <h4>Instructions:</h4>
          <ul className="instructions">
            <li>Fill the jar with water and add blue food coloring.</li>
            <li>Pour a layer of vegetable oil on top of the water.</li>
            <li>Use the straw to blow bubbles into the jar to create a mini ocean.</li>
          </ul>
          <button onClick={startTimer}>Start the Activity!</button>
          <div id="timer">{timeLeft > 0 ? `Time Left: ${formatTime(timeLeft)}` : ''}</div>
        </div>
      </section>

      <section id="phytoplankton-art-section">
        <h2 className="activity-title">B. Phytoplankton Art</h2>
        <div className="activity-content">
          <h3 className="what-you-need-title">What You Need:</h3>
          <ul className="what-you-need-list">
            <li className="item">🎨 Paint</li>
            <li className="item">🖌️ Brushes</li>
            <li className="item">📄 Paper</li>
          </ul>
          <h3 className="instructions-title">Instructions:</h3>
          <ol className="instructions-list">
            <li className="instruction-item">🔍 Research different types of phytoplankton online.</li>
            <li className="instruction-item">🎨 Create your own colorful phytoplankton artwork based on what you learn!</li>
          </ol>
          <button onClick={startPhytoplanktonTimer} className="start-button">Start Activity</button>
          <div id="phytoplankton-timer">{phytoplanktonTimeLeft > 0 ? `Time Left: ${formatTime(phytoplanktonTimeLeft)}` : ''}</div>
        </div>
      </section>
    </div>
  );
};

export default OceanExplorers;
