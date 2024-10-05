import React from 'react';
import '../styles/gamepage.css';
import HomeIcon from '../image/home-icon.png'; // Importing the home icon


const GameNavbar = () => {
  return (
    <nav className="navbar">
      {/* Left section with home button, left arrow, and search bar */}
      <div className="navbar-left">
        {/* Home button */}
        <a href="#">
          <img src={HomeIcon} alt="Home" className="homeIcon" /> {/* Using imported HomeIcon */}
        </a>

        {/* Left arrow button */}
        <button>
          ←
        </button>

        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search Here" />
        </div>
      </div>

      {/* Rightmost section with logo */}
      <div className="logo">
      <h1>Pace Classroom</h1>
      </div>
    </nav>
  );
};

export default GameNavbar;
