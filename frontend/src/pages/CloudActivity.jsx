import React, { useState, useRef, useEffect } from 'react';
import '../styles/cloudactivity.css'; // Import the CSS file

const CloudObservationActivity = () => {
    const [drawing, setDrawing] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isDrawingSectionVisible, setDrawingSectionVisible] = useState(false);
    const [weatherPrediction, setWeatherPrediction] = useState('');
    const canvasRef = useRef(null);
    const timerRef = useRef(null);

    const startDrawing = () => {
        setDrawing(true);
    };

    const draw = (e) => {
        if (!drawing) return;

        const ctx = canvasRef.current.getContext('2d');
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const stopDrawing = () => {
        setDrawing(false);
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
    };

    const clearCanvas = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const submitPrediction = () => {
        if (weatherPrediction.trim() === "") {
            alert("Please write a weather prediction before submitting!");
        } else {
            alert(`Your weather prediction: ${weatherPrediction}`);
        }
    };

    useEffect(() => {
        if (isDrawingSectionVisible) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        alert("Time's up! Please submit your prediction.");
                        submitPrediction();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current); // Cleanup timer on component unmount
    }, [isDrawingSectionVisible]);

    return (
        <div className="container">
            <header className="header">
                <h1>Activities for You!</h1>
                <p>Activity 1: Cloud Observation</p>
            </header>
            
            <section className="activity">
                <div className="instructions">
                    <h2>What You Need:</h2>
                    <p>A notebook and crayons!</p>
                    <h2>How to Do It:</h2>
                    <p>Look up at the sky and draw the clouds you see! Are they fluffy or thin? Write down what you think the weather will be like!</p>
                </div>
                <button onClick={() => { setDrawingSectionVisible(true); }}>Start Drawing!</button>
            </section>

            {isDrawingSectionVisible && (
                <div id="drawing-section">
                    <h2>Draw Your Clouds!</h2>
                    <canvas
                        ref={canvasRef}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseOut={stopDrawing}
                        width={500}
                        height={300}
                        style={{ border: '2px solid #000', backgroundColor: '#FFFFFF', display: 'block', margin: '20px auto' }}
                    />
                    <div className="controls">
                        <button onClick={clearCanvas}>Clear</button>
                    </div>
                    <textarea
                        value={weatherPrediction}
                        onChange={(e) => setWeatherPrediction(e.target.value)}
                        placeholder="Write down what you think the weather will be like!"
                        style={{ padding: '10px', width: '100%', maxWidth: '500px', height: '100px', fontSize: '16px', borderRadius: '10px', border: '2px solid #FF4500', margin: '20px 0' }}
                    />
                    <button onClick={submitPrediction}>Submit Prediction</button>
                    <div className="timer">Time Left: <span>{timeLeft}</span> seconds</div>
                </div>
            )}
        </div>
    );
};

export default CloudObservationActivity;
