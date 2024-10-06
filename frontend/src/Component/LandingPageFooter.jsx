import React from 'react';

const LandingPageFooter = () => {
  return (
    <footer className="nasa-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>HexaHacks</h2>
          <p className="footer-description">
            This website is part of the NASA Space Apps Challenge, focusing on innovative solutions for space exploration and beyond.
          </p>
        </div>
        
        <div className="footer-right">
          <h3>Meet our Team</h3>
          <p className="footer-description">
          We are a diverse group of passionate individuals united by our commitment to tackling global challenges through technology and creativity. Join us as we work together to develop innovative solutions for the future!
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 HexaHacks. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/CICS.SCRIPT">Facebook</a>
          <a href="">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default LandingPageFooter;
