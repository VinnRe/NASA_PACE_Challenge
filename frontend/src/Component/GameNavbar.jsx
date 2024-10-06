import React from 'react';
import '../styles/gamepage.css';
import HomeIcon from '../image/home-icon.png'; // Importing the home icon
import { IoMdArrowRoundBack } from "react-icons/io"
import { AiFillHome } from "react-icons/ai"


const GameNavbar = () => {
  return (
    <nav className="navbar">
      {/* Left section with home button, left arrow, and search bar */}
      <div className="navbar-left">
        {/* Home button */}
        <a href="/">
          <AiFillHome size={42} className='home-btn-game'/>
        </a>

        {/* Left arrow button */}
        <a href="/gamepage">
          <IoMdArrowRoundBack size={42} className='back-btn-game'/>
        </a>
      </div>

      {/* Rightmost section with logo */}
      <div className="logo">
          <h1>Pace Classroom</h1>
      </div>
    </nav>
  );
};

export default GameNavbar;
