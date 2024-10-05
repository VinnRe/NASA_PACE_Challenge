import React from 'react'
import character from '../image/character.png'

const FirstBodyContainer = () => {
  return (
    <div className="bodycontainer">
      <img src={character} alt="" srcset="" />
      <div className="bodysubcontainer">
       <h1>The Best place to <br/> <span className='learn' >learn</span> and <span className='play'> play </span> <br/> for kids</h1>
    </div></div>
    
  )
}

export default FirstBodyContainer