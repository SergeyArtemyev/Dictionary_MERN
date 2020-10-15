import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import hangman from '../../assets/js/hangman';
import { connect } from 'react-redux';


const Hangman = ({ words: { words, loading } }) => {
  useEffect(()=>{
    !loading && words.length !== 0 && hangman(words);
  }, [words, loading])

  return (
    <Fragment>
      {!loading && (
        <div id='hangman' data-target='Hangman' className='game flex-column align-items-center'>
          <h2 className='heading-silver mt-5 mb-3'>Hangman</h2>
          <div className='d-flex flex-column justify-content-center align-items-center box'>
            <p className='text-secondary'>Translate the word  - <span className='hang-word'></span></p>
            <div className="game-container">
              <svg height="250" width="200" className="figure-container">
                {/* Rod */}
                <line x1="60" y1="20" x2="140" y2="20" />
                <line x1="140" y1="20" x2="140" y2="50" />
                <line x1="60" y1="20" x2="60" y2="230" />
                <line x1="20" y1="230" x2="100" y2="230" />
      
                {/* Head */}
                <circle className="figure-part" cx="140" cy="70" r="20" />
                {/* Body */}
                <line className="figure-part" x1="140" y1="90" x2="140" y2="150" />
                {/* Arms */}
                <line className="figure-part" x1="140" y1="120" x2="120" y2="100" />
                <line className="figure-part" x1="140" y1="120" x2="160" y2="100" />
                {/* Legs */}
                <line className="figure-part" x1="140" y1="150" x2="120" y2="180" />
                <line className="figure-part" x1="140" y1="150" x2="160" y2="180" />
            </svg>
      
              <div className="wrong-letters-container">
                <div id="wrong-letters"></div>
              </div>
      
              <div className="word" id="word"></div>
            </div>
      
            {/* Container for final messagge */}
            <div className="popup-container" id="popup-container">
              <div className="popup box box-silver-2">
                <h2 id="final-message" className='text-silver 2'>hhh</h2>
                <button id="play-button" className='btn btn-silver'>Continue</button>
              </div>
            </div>
      
            {/* Notification */}
            <div className="notification-container" id="notification-container">
              <p className='text-silver-2'>You have already entered this letter</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

Hangman.propTypes = {
  words: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  words: state.words,
});

export default connect(mapStateToProps, {})(Hangman)
