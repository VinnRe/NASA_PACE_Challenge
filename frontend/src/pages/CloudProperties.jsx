import React, { useState } from 'react';
import '../styles/cloudproperties.css';
import Cirrus from '../image/cirrus.png';
import Cumulonimbus from '../image/Cumulonimbus.png';
import Stratus from '../image/stratus.png';

const CloudProperties = () => {
    const [cloudInfo, setCloudInfo] = useState({
        description: "Select a cloud type to see its properties!",
        image: Cirrus // Default image
    });
    const [altitude, setAltitude] = useState(50);
    const [density, setDensity] = useState(50);

    const clouds = {
        cumulonimbus: {
            description: "🌩 Cumulonimbus clouds are huge and bring heavy rain and thunderstorms!",
            image: Cumulonimbus
        },
        cirrus: {
            description: "☁️ Cirrus clouds are light and wispy, made of ice crystals, and are way up in the sky!",
            image: Cirrus
        },
        stratus: {
            description: "🌫 Stratus clouds are flat and grey, covering the whole sky and sometimes bringing light rain.",
            image: Stratus
        }
    };

    const showCloud = (type) => {
        setCloudInfo(clouds[type]);
    };

    const imageStyle = {
        opacity: density / 100, // Decrease opacity based on density
        transform: `scale(${1 - (altitude / 200)})`, // Decrease size based on altitude
        transition: 'opacity 0.3s, transform 0.3s', // Smooth transition
    };

    return (
        <div className='body2'>
            <div className="cloud-container">
                <header className='cloud-header'>
                    <h1 className="cloud-title">Explore Cloud Properties!</h1>
                </header>
                <section>
    <div className="cloud-buttons-container">
        <h2 className="cloud-subtitle">Choose a Cloud Type!</h2>
        <div className="cloud-buttons">
            {Object.keys(clouds).map((key) => (
                <button 
                    key={key} 
                    className="cloud-button" 
                    onClick={() => showCloud(key)}
                >
                    {clouds[key].description.split(" ")[0]} {clouds[key].description.split(" ")[1]}
                </button>
            ))}
        </div>
    </div>

    <div className="cloud-info">
        <div className="cloud-image-container">
            <img src={cloudInfo.image} alt="Cloud" className="cloud-img" style={imageStyle} />
        </div>
        <div className="interactive-container">
            <h3>Play with Cloud Properties!</h3>
            <label htmlFor="altitude-slider">🌍 Cloud Altitude:</label>
            <input 
                type="range" 
                id="altitude-slider" 
                className="interactive-slider"
                min="0" 
                max="100" 
                value={altitude} 
                onChange={(e) => setAltitude(e.target.value)} 
            />
            <p className="value-display">Altitude: {altitude} km</p>

            <label htmlFor="density-slider">🌧 Cloud Density:</label>
            <input 
                type="range" 
                id="density-slider" 
                className="interactive-slider"
                min="0" 
                max="100" 
                value={density} 
                onChange={(e) => setDensity(e.target.value)} 
            />
            <p className="value-display">Density: {density}%</p>
        </div>
    </div>

    <div className="cloud-description">{cloudInfo.description}</div>
</section>


                <footer className="cloud-footer">
                    <p>🌟 Have fun learning about clouds and weather! 🌈</p>
                </footer>
            </div>
        </div>
    );
};

export default CloudProperties;
