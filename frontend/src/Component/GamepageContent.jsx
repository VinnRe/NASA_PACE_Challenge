import React, { useState } from 'react';
import contentData from './data.json'; // Assuming this is your JSON
import { Link } from 'react-router-dom';

const GamepageContent = () => {
  const [content, setContent] = useState('');
  const [theme, setTheme] = useState('');

  const handleContentChange = (key) => {
    const selectedContent = contentData[key];
    if (selectedContent) {
      setContent(selectedContent.content); // Set the content
      setTheme(selectedContent.theme);     // Set the theme
      console.log("Selected Content:", selectedContent);  // Debugging
    }
  };

  return (
    <div className={`gamepagecontainer ${theme}`}>
      <div className="game-card-container">
        <div className="gamepagecontent">
          <div className="firstline-container">
            <div className="game-btn plankton-btn" onClick={() => handleContentChange('plankton')}>
              <img width="64" height="64" src="https://img.icons8.com/ios-filled/50/plankton.png" alt="plankton"/>
              <p>Phytoplankton</p>
            </div>

            <div className="game-btn aero-btn" onClick={() => handleContentChange('aerosol')}>
              <img width="64" height="64" src="https://img.icons8.com/ios-filled/50/deadly-spray.png" alt="deadly-spray"/>
              <p>Aerosol</p>
            </div>
          </div>

          <div className="gamecontent">
            {/* Display welcome message if no content is active */}
            {content ? (
              <p dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p>Welcome here!</p>
            )}
          </div>

          <div className="secondline-container">
            <div className="game-btn cloud-btn" onClick={() => handleContentChange('ecosystem')}>
              <img width="64" height="64" src="https://img.icons8.com/?size=100&id=117004&format=png&color=000000" alt="clouds"/>
              <p>Clouds</p>
            </div>
            <div className="game-btn ocean-btn" onClick={() => handleContentChange('ocean')}>
              <img width="64" height="64" src="https://img.icons8.com/arcade/64/ocean-wave.png" alt="ocean-wave"/>
              <p>Ocean</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamepageContent;
