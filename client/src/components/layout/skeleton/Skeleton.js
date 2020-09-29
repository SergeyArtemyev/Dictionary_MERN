import React from 'react';
import Avatar from '../../../img/user.jpg';

const Skeleton = () => {
  return (
    <section id='sckeleton'>
      <div id='top' className='d-flex'>
        <div id='profile' className='d-flex flex-column align-items-center justify-content-center'>
          <img className='mb-2' src={Avatar} alt='user img' />
          <div className='username mb-3'>User name</div>
          <div className='word-amount d-flex justify-content-between mb-1'>
            Words------------------------------<span>20</span>
          </div>
          <div className='user-level d-flex justify-content-between mb-4'>
            Level-------------------------------<span>20</span>
          </div>
          <a href='#!' className='btn-logout'>
            Logout <i className='fas fa-sign-out-alt'></i>
          </a>
        </div>
        <div id='random-game' className='d-flex justify-content-center align-items-center'>
          <p>SOME RANDOM GAME SWITCH EVERY 10 SEC</p>
          <img src={Avatar} alt='user img' />
          <span>some description of the situation at left</span>
        </div>
      </div>
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
    </section>
  );
};

export default Skeleton;
