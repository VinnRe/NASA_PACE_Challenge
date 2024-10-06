import React from 'react'
import character from '../image/character.png'
import { FaArrowTrendUp } from "react-icons/fa6";

const FirstBodyContainer = () => {
  return (
    <div className="bodycontainer">
      <img src={character} alt="" />
      <div className="bodysubcontainer">
        <h1>
          The Best place to <br />
          <span className="learn">learn</span> and <span className="play">play</span> <br />
          for kids
        </h1>
        <div className="getstartedbutton">
          <a href="/gamepage">
            Get Started
            <FaArrowTrendUp className="arrowicon" />
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default FirstBodyContainer