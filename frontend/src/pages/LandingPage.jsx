import React from 'react'
import '../styles/landingpage.css'

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
       <h1>The Best place to <br/> <span className='learn' >learn</span> and <span className='play'> play </span> <br/> for kids</h1>
    </div>
    
    </>
  )
}

export default LandingPage