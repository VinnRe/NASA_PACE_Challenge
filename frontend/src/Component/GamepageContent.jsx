import React, { useState } from 'react';
import contentData from './data.json';



const GamepageContent = () => {
  const [content, setContent] = useState('');
  const [theme, setTheme] = useState('');

  const handleContentChange = (key) => {
    const selectedContent = contentData[key];
    if (selectedContent) {
      setContent(selectedContent.content); // Set the content
      setTheme(selectedContent.theme); // Set the theme
    }
  };

  return (
    <div className={`gamepagecontainer ${theme}`}>
      <div className="gamepagecontent">
        <div className="firstline">
          <ul>
            <li>
              <a href="#" onClick={() => handleContentChange('plankton')}>
                <p><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/plankton.png" alt="plankton"/>Plankton</p>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleContentChange('aerosol')}>
              <p><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/deadly-spray.png" alt="deadly-spray"/>Plankton</p>-
              </a>
            </li>
          </ul>
        </div>

        <div className="gamecontent">
          {/* Display welcome message if no content is active */}
          {content ? (
            <p>{content}</p>
          ) : (
            <p>Welcome here!</p>
          )}

          {/* Conditionally rendering the ocean theme elements */}
          {theme === 'ocean-theme' && (
            <div className="ocean">
              {/* Bubble elements for ocean theme */}
              {[...Array(12)].map((_, index) => (
                <div className={`bubble bubble--${index + 1}`} key={index}></div>
              ))}
              <div id="octocat"></div>
            </div>
          )}
        </div>

        <div className="secondline">
          <ul>
            <li>
              <a href="#" onClick={() => handleContentChange('ocean')}>
              <p><img width="64" height="64" src="https://img.icons8.com/arcade/64/ocean-wave.png" alt="ocean-wave"/>Ocean</p>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleContentChange('ecosystem')}>
                 <p><img width="64" height="64" src="https://img.icons8.com/arcade/64/ecosystem.png" alt="ecosystem"/>Ecosystem</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamepageContent;
