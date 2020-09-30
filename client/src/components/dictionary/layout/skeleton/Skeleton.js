import React from 'react';
import Dictionary from '../../Dictionary';
import Profile from './top/Profile';
import RandomGame from './top/RandomGame';

const Skeleton = () => {
  return (
    <section id='sckeleton'>
      {/* top */}
      <div id='top' className='d-flex'>
        {/* top profile*/}
        <Profile />
        {/* top random game */}
        <RandomGame />
      </div>
      {/* aside-nav */}
      <div className='row no-gutters'>
        <div className='col-3'>
          <aside id='aside-nav'>
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
            <div className='row no-gutters my-5'>
              <Dictionary />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Skeleton;
