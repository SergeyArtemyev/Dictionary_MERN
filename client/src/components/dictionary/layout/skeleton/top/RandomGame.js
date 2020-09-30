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
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>First game</h3>
              <p className='text-silver'>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Second game</h3>
              <p className='text-silver'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='carousel-caption d-none d-md-block'>
              <h3 className='text-silver'>Third game</h3>
              <p className='text-silver'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomGame;
