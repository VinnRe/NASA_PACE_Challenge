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
      <div className="gamepagecontent">
        <div className="firstline">
          <ul>
            <li>
              <a href="#" onClick={() => handleContentChange('plankton')}>
                <p><img width="64" height="64" src="https://img.icons8.com/ios-filled/50/plankton.png" alt="plankton"/>Plankton</p>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleContentChange('aerosol')}>
              <p><img width="64" height="64" src="https://img.icons8.com/ios-filled/50/deadly-spray.png" alt="deadly-spray"/>Aerosol</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="gamecontent">
          {/* Display welcome message if no content is active */}
          {content ? (
            <p dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p>Welcome here!</p>
          )}
        </div>

        <div className="secondline">
          <ul>
            <li>
              <a href="#" onClick={() => handleContentChange('ecosystem')}>
                <p><img width="64" height="64" src="https://img.icons8.com/?size=100&id=117004&format=png&color=000000" alt="clouds"/>Clouds</p>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleContentChange('ocean')}>
                <p><img width="64" height="64" src="https://img.icons8.com/arcade/64/ocean-wave.png" alt="ocean-wave"/>Ocean</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamepageContent;
