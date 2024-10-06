import React, { useState, useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import '../styles/aerosoldata.css';

Chart.register(...registerables);

const AerosolData = () => {
    const [aerosolLevel, setAerosolLevel] = useState(0);
    const [statusMessage, setStatusMessage] = useState("Check the air quality!");
    const [scenarioText, setScenarioText] = useState("The air is clear!");
    const [isQuizVisible, setIsQuizVisible] = useState(false);
    const progressBarRef = useRef(null);
    const iconRef = useRef(null);
    const quizResultRef = useRef(null);
    const aerosolChartRef = useRef(null);
    const aerosolData = [];

    const updateDisplay = () => {
        setStatusMessage(getStatusMessage(aerosolLevel));
        setScenarioText(getScenario(aerosolLevel));
        updateChart();
        updateProgressBar();
        updateIcon();
    };

    const getStatusMessage = (level) => {
        if (level < 30) return "Air quality is good! 😊";
        else if (level < 60) return "Air quality is moderate! 😐";
        return "Air quality is poor! ❌";
    };

    const getScenario = (level) => {
        if (level < 30) return "The air is clear!";
        else if (level < 60) return "The air is getting hazy!";
        return "The air is polluted!";
    };

    const updateChart = () => {
        aerosolData.push(aerosolLevel);
        const chart = aerosolChartRef.current;
        chart.data.labels.push(aerosolData.length);
        chart.data.datasets[0].data.push(aerosolLevel);
        chart.update();
    };

    const updateProgressBar = () => {
        const percentage = Math.min(aerosolLevel, 100);
        progressBarRef.current.style.width = `${percentage}%`;
    };

    const updateIcon = () => {
        let icon;
        if (aerosolLevel < 30) icon = "🌞"; 
        else if (aerosolLevel < 60) icon = "🌤️"; 
        else icon = "❌";
        iconRef.current.innerHTML = icon;
    };

    const increaseAerosol = () => {
        setAerosolLevel(prev => Math.min(prev + 10, 100));
        updateDisplay();
    };

    const decreaseAerosol = () => {
        setAerosolLevel(prev => Math.max(prev - 10, 0));
        updateDisplay();
    };

    const resetAerosol = () => {
        setAerosolLevel(0);
        updateDisplay();
    };

    const startQuiz = () => {
        setIsQuizVisible(true); // Set the quiz to be visible
    };

    const checkAnswer = (option) => {
        const correctAnswer = 'option1';
        quizResultRef.current.textContent = option === correctAnswer ? "Correct! 🎉" : "Wrong answer. Try again! ❌";
    };

    useEffect(() => {
        const ctx = document.getElementById("aerosolChart").getContext("2d");
        if (aerosolChartRef.current) {
            aerosolChartRef.current.destroy();
        }
    
        aerosolChartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Aerosol Levels (µg/m³)',
                    data: [],
                    borderColor: 'rgba(33, 150, 243, 1)',
                    backgroundColor: 'rgba(33, 150, 243, 0.2)',
                    borderWidth: 2,
                    fill: true,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        return () => {
            if (aerosolChartRef.current) {
                aerosolChartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className='body1'>
        <div className='container1'>
            <div className={`box heading-box ${isQuizVisible ? 'fade-out' : 'fade-in'}`}>
                <h1>🌈 Environmental Monitoring Dashboard 🌈</h1>
            </div>
    
            <div className={`box chart-box ${isQuizVisible ? 'fade-out' : 'fade-in'}`}>
                <div className="info">
                    <h2>Aerosol Level: <span id="aerosolLevel">{aerosolLevel}</span> µg/m³</h2>
                    <p>{statusMessage}</p>
                </div>
                
                <div className="chart-controls">
                    <canvas id="aerosolChart" width="400" height="80"></canvas>
                    <div className="controls">
                        <button onClick={increaseAerosol}>Increase 🚀</button>
                        <button onClick={decreaseAerosol}>Decrease 🌬️</button>
                        <button onClick={resetAerosol}>Reset 🔄</button>
                    </div>
                </div>
    
                <div className="progress-bar-container">
                    <div ref={progressBarRef} className="progress-bar"></div>
                </div>
                <div ref={iconRef} className="icon"></div>
            </div>
    
            <div className={`box scenario-box ${isQuizVisible ? 'fade-out' : 'fade-in'}`}>
                <div className="scenario">
                    <p>Scenario: <span id="scenarioText">{scenarioText}</span></p>
                </div>
                <p>Understanding aerosols helps us keep our air clean! 🌍💚</p>
            </div>
    
            {isQuizVisible ? (
                <div className={`box quiz-box`}>
                    <div id="quizContainer" className={`quiz-container fade-in`}>
                        <h2>Quiz Time! 📝</h2>
                        <div className="quiz-question">What is the main source of aerosols?</div>
                        <div className="quiz-option" onClick={() => checkAnswer('option1')}>1. Forest fires</div>
                        <div className="quiz-option" onClick={() => checkAnswer('option2')}>2. Clean air</div>
                        <div className="quiz-option" onClick={() => checkAnswer('option3')}>3. Ice melting</div>
                        <div className="result" ref={quizResultRef}></div>
                    </div>
                </div>
            ) : (
                <button id="startQuizButton" className="controls" onClick={startQuiz}>Start Quiz 🎉</button>
            )}
        </div>
        </div>
    );
    
};

export default AerosolData;
