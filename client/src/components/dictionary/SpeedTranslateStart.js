import React from 'react'
import { startGame } from '../../assets/js/speedTranslate';

const speedTranslateStart = ({ words }) => {
  const onClick = () => {
    startGame(words)
  }

  return (
    <div className='start-container'>
      <button onClick={onClick}>Start Game</button>
    </div>
  )
}

export default speedTranslateStart
