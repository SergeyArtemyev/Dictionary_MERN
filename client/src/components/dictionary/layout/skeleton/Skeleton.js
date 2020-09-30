import React from 'react';
import Avatar from '../../../../img/user.jpg';
import Nerd from '../../../../img/nerd.png';
import Dictionary from '../../Dictionary';

const Skeleton = () => {
  return (
    <section id='sckeleton'>
      {/* top */}
      <div id='top' className='d-flex'>
        {/* top profile*/}
        <div id='profile' className='d-flex flex-column align-items-center justify-content-center'>
          <img className='mb-2' src={Avatar} alt='user img' />
          <div className='username text-silver mb-3'>User name</div>
          <div className='word-amount text-silver d-flex justify-content-between mb-1'>
            Words------------------------------<span>20</span>
          </div>
          <div className='user-level text-silver d-flex justify-content-between mb-4'>
            Level-------------------------------<span>20</span>
          </div>
          <a href='#!' className='btn-logout text-silver-2'>
            Logout <i className='fas fa-sign-out-alt'></i>
          </a>
        </div>
        {/* top random game */}
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
      </div>
      {/* aside-nav */}
      <div className='row no-gutters'>
        <div className='col-3'>
          <aside id='aside-nav' className='pt-5'>
            <nav>
              <ul className='list-group'>
                <li className='list-group-item'>collapsible list items</li>
                <li className='list-group-item'>collapsible list items</li>
                <li className='list-group-item'>collapsible list items</li>
                <li className='list-group-item'>collapsible list items</li>
                <li className='list-group-item'>collapsible list items</li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className='col-9'>
          <main>
            <Dictionary />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Skeleton;
