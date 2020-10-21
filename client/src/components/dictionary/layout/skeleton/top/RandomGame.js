import React from 'react';
import Nerd from '../../../../../img/nerd.png';

const RandomGame = () => {
  return (
    <div id='random-game' className='d-flex justify-content-center align-items-center'>
      <div className='nerd'>
        <img src={Nerd} alt='nerd' />
      </div>
      <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='3'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Memory Cards</h3>
              <p className='text-silver'>
                Read the word, translate, check your answer on the other side of the card
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Hangman</h3>
              <p className='text-silver'>
                Try to write a word without mistakes to save a poor guy
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Translate on Speed</h3>
              <p className='text-silver'>
                Translate as many words as you can on given time
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Listen and Write</h3>
              <p className='text-silver'>
                Challenge your listening skills and write a correct word
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomGame;
