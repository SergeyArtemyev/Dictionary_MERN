import React from 'react';
import Dictionary from '../../Dictionary';
import MemoryCards from '../../MemoryCards';
import Profile from './top/Profile';
import RandomGame from './top/RandomGame';
import Hangman from '../../Hangman';
import SpeedTranslate from '../../SpeedTranslate';
import ListenWrite from '../../ListenWrite';
import changeGame from '../../../../assets/js/change_game';
import noWordsFound from '../../../../assets/js/noWordsFound';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Skeleton = ({words: {words, loading}}) => {
  const onClick = (e, loading) => {
    if(words.length === 0){
      e.preventDefault();
      noWordsFound();
    } else {
      changeGame(e, loading);
    }
  }
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
                  <a className='text-silver' href='!#' onClick={(e) => changeGame(e, loading)}>
                    Vocabulary
                  </a>
                </li>
                <li className='list-group-item'>
                  <a className='text-silver' href='!#' onClick={(e) =>onClick(e, loading)}>
                    Memory Cards
                  </a>
                </li>
                <li className='list-group-item text-silver'>
                  <a className='text-silver' href='!#' onClick={(e) =>onClick(e, loading)}>
                    Hangman
                  </a>
                </li>
                <li className='list-group-item text-silver'>
                  <a className='text-silver' href='!#' onClick={(e) =>onClick(e, loading)}>
                    Translate on speed
                  </a>
                </li>
                <li className='list-group-item text-silver'>
                  <a className='text-silver' href='!#' onClick={(e) =>onClick(e, loading)}>
                    Listen and write
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className='col-9'>
          <main>
            <Dictionary />
            <MemoryCards />
            <Hangman/>
            <SpeedTranslate/>
            <ListenWrite/>
          </main>
        </div>
      </div>
    </section>
  );
};

Skeleton.propTypes = {
  words: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  words: state.words
})


export default connect(mapStateToProps, {})(Skeleton);
