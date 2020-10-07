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
              <h2 className='heading-silver pl-3 mb-2'>Games and Practice</h2>
              <ul className='list-group list-group-flush box box-silver-2'>
                <li className='list-group-item text-silver'>collapsible list items</li>
                <li className='list-group-item text-silver'>collapsible list items</li>
                <li className='list-group-item text-silver'>collapsible list items</li>
                <li className='list-group-item text-silver'>collapsible list items</li>
                <li className='list-group-item text-silver'>collapsible list items</li>
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
