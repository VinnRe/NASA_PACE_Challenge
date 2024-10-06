import React, { useState, useEffect } from 'react';
import '../styles/oceancard.css'; // Make sure to import your CSS file

const OceanCard = () => {
    const cardData = [
        { name: 'Euglenophyta', img: '/Euglenophyta.png', description: 'Single-celled organisms that are both plant and animal-like.' },
        { name: 'Diatom', img: '/DIATOM.png', description: 'Unicellular algae with intricate silica cell walls.' },
        { name: 'Dinoflagellate', img: '/Dinoflagellate.png', description: 'Photosynthetic plankton known for their bioluminescence.' },
        { name: 'Cyanobacteria', img: '/cyanobacteria.png', description: 'Photosynthetic bacteria often found in aquatic environments.' }
    ];

    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        let timer;
        if (timeLeft > 0 && !gameOver) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            alert('Time is up! Try again!');
            setGameOver(true);
        }
        return () => clearInterval(timer);
    }, [timeLeft, gameOver]);

    const init = () => {
        setMatchedCards([]);
        setScore(0);
        setCards(shuffle([...cardData, ...cardData].map((item, index) => ({ ...item, id: index, flipped: false }))));
        setLockBoard(false);
        setGameOver(false);
        setTimeLeft(30);
    };

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const flipCard = (card) => {
        if (lockBoard || card === firstCard || card === secondCard) return;

        const newCards = cards.map(c => (c.id === card.id ? { ...c, flipped: true } : c));
        setCards(newCards);

        if (!firstCard) {
            setFirstCard(card);
        } else {
            setSecondCard(card);
            setLockBoard(true);
            checkForMatch(card);
        }
    };

    const checkForMatch = (card) => {
        if (firstCard.name === card.name) {
            setMatchedCards(prev => [...prev, firstCard.id, card.id]);
            setScore(prev => prev + 1);
            setTimeout(() => {
                setFirstCard(null);
                setSecondCard(null);
                setLockBoard(false);
            }, 500);
            if (matchedCards.length + 2 === cards.length) {
                alert('Congratulations! You matched all the phytoplankton types!');
                setGameOver(true);
            }
        } else {
            setTimeout(() => {
                setCards(prevCards =>
                    prevCards.map(c => {
                        if (c.id === firstCard.id || c.id === card.id) {
                            return { ...c, flipped: false };
                        }
                        return c;
                    })
                );
                setFirstCard(null);
                setSecondCard(null);
                setLockBoard(false);
            }, 1000);
        }
    };

    const restartGame = () => {
        init();
    };

    return (
        <div className="phytoplankton-game-body">
            <div className="phytoplankton-game-container">
                <header className="phytoplankton-game-header">
                    <h1>Phytoplankton Types Game</h1>
                    <p>Match the phytoplankton types with their descriptions!</p>
                </header>

                <div className="phytoplankton-game-timer">Time Left: {timeLeft} seconds</div>
                <div className="phytoplankton-game-score">Score: {score}</div>

                <section className="phytoplankton-game">
                    <div className="phytoplankton-game-board">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`phytoplankton-card ${card.flipped ? 'flipped' : ''} ${matchedCards.includes(card.id) ? 'matched' : ''}`}
                                onClick={() => flipCard(card)}
                            >
                                {card.flipped && <img src={card.img} alt={card.name} />}
                            </div>
                        ))}
                    </div>
                    {gameOver && <button className="phytoplankton-restart-btn" onClick={restartGame}>Restart Game</button>}
                </section>

                <footer className="phytoplankton-game-footer">
                    <p>Can you match all the phytoplankton types?</p>
                </footer>
            </div>
        </div>
    );
};

export default OceanCard;
