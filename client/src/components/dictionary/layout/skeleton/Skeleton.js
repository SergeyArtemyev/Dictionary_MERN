import React from 'react';
import Dictionary from '../../Dictionary';
import MemoryCards from '../../MemoryCards';
import Profile from './top/Profile';
import RandomGame from './top/RandomGame';

const Skeleton = () => {
  // Change game function
  const changeGame = (e) => {
    const games = document.querySelectorAll('.game');
    games.forEach((game) => {
      if (game.classList.contains('game-active')) {
        game.classList.remove('game-active');
      }
    });
    games.forEach((game) => {
      if (e.target.innerHTML === game.getAttribute('data-target')) {
        game.classList.add('game-active');
      }
    });
    e.preventDefault();
  };
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
                <li className='list-group-item'>
                  <a className='text-silver' href='!#' onClick={(e) => changeGame(e)}>
                    Vocabulary
                  </a>
                </li>
                <li className='list-group-item'>
                  <a className='text-silver' href='!#' onClick={(e) => changeGame(e)}>
                    Memory Cards
                  </a>
                </li>
                <li className='list-group-item text-silver'>collapsible list items</li>
                <li className='list-group-item text-silver'>collapsible list items</li>
                <li className='list-group-item text-silver'>collapsible list items</li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className='col-9'>
          <main>
            <Dictionary />
            <MemoryCards />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Skeleton;
