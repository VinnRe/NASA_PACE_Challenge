import React from 'react'
import '../styles/landingpage.css'
import character from '../image/character.png'

const LandingPage = () => {
  return (
    <>
    <div className="container"> 
        <h1>Pace Classroom</h1>
        <div className="subcontainer">
            <div className="navlink">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'></a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'></a></li>

                </ul>
            </div>
        </div>
    </div>
    <div className="bodycontainer">
      <img src={character} alt="" srcset="" />
      <div className="bodysubcontainer">
       <h1>The Best place to <br/> <span className='learn' >learn</span> and <span className='play'> play </span> <br/> for kids</h1>
    </div></div>
    
    </>
  )
}

export default LandingPage