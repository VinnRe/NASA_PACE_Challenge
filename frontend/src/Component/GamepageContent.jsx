import React, { useState } from 'react';
import contentData from './data.json'; 
import { Link } from 'react-router-dom';
import GamepageButton from './GamepageButton';

const GamepageContent = () => {
  const [theme, setTheme] = useState('');
  const [description, setDescription] = useState('');
  const [lessonButton, setLessonButton] = useState('');
  const [lessonLink, setLessonLink] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [link, setLink] = useState('');

  const handleContentChange = (key) => {
    const selectedContent = contentData[key];
    if (selectedContent) {
      setTheme(selectedContent.theme);
      setDescription(selectedContent.description);
      setLessonButton(selectedContent.lessonButton);
      setLessonLink(selectedContent.lessonLink);
      setButtonText(selectedContent.buttonText);
      setLink(selectedContent.link);
    } else {
      // Clear if no content is selected
      setTheme('');
      setDescription('');
      setLessonButton('');
      setLessonLink('');
      setButtonText('');
      setLink('');
    }
  };

  return (
    <div className={`gamepagecontainer ${theme}`}>
      <div className="game-card-container">
        <div className="gamepagecontent">
          <div className="firstline-container">
            <div className="game-btn plankton-btn" onClick={() => handleContentChange('plankton')}>
              <img width="64" height="64" src="https://img.icons8.com/ios-filled/50/plankton.png" alt="plankton"/>
              <p>Plankton</p>
            </div>

            <div className="game-btn aero-btn" onClick={() => handleContentChange('aerosol')}>
              <img width="64" height="64" src="https://img.icons8.com/ios-filled/50/deadly-spray.png" alt="deadly-spray"/>
              <p>Aerosol</p>
            </div>
          </div>

          <div className="gamecontent">
            {description && <p>{description}</p>}
            <div className="gamecontent-btn-container">
              {buttonText && link && (
                <GamepageButton buttonText={buttonText} link={link} />
              )}

              {lessonButton && lessonLink && (
                <GamepageButton buttonText={lessonButton} link={lessonLink} />
              )}
            </div>
          </div>

          <div className="secondline-container">
            <div className="game-btn cloud-btn" onClick={() => handleContentChange('clouds')}>
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