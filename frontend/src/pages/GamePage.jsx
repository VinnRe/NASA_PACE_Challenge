import React from 'react'
import GamepageContent from '../Component/GamepageContent'
import '../styles/gamepage.css'
import GameNavbar from '../Component/GameNavbar'

const GamePage = () => {
  return (
    <div>
      <GameNavbar />
      <GamepageContent />
    </div>
  )
}

export default GamePage