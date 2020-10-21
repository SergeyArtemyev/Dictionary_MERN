import React from 'react';
import SpeedTranslateStart from './SpeedTranslateStart'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {speedTranslate} from '../../assets/js/speedTranslate'

const SpeedTranslate = ({ words: { words, loading } }) => {

  const onClick = () => {
    speedTranslate(words);
    document.getElementById("end-game-container").style.display = 'none'
  }
   
  return (
    <div id='speed-translation' data-target='Translate on speed' className='game flex-column align-items-center'>
      <h2 className='heading-silver mt-5 mb-3'>Translate on speed</h2>
      {!loading && words.length !== 0 && <SpeedTranslateStart words={words}/>}
      <div className='flex-column justify-content-center align-items-center box speed-translate-container'>
        <div id="settings" className="settings">
          <form id="settings-form">
            <div>
              <label htmlFor="difficulty" className='mr-2'>Difficulty</label>
              <select id="difficulty" onChange={()=> speedTranslate(words)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </form>
        </div>

        <div className="main-container">
          <h2>Speed Typer</h2>
          <small>Type the following</small>

          <h3 id="rusWord">hhh</h3>
          <input type="text" id="text" autoComplete="off" placeholder="Type the word here..." />

          <p className="time-container">Time left: <span id="time">10s</span></p>

          <p className="score-container">Score: <span id="score">0</span></p>

          <div id="end-game-container" className="end-game-container">
            <h1>Time ran out</h1>
            <p>Your final score is <span id='final-score'></span></p>
            <button id='reload' onClick={onClick}>Reload</button>
          </div>
        </div>
      </div>
    </div>
  )
}

SpeedTranslate.propTypes = {
  words: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  words: state.words
})

export default connect(mapStateToProps, {})(SpeedTranslate)
