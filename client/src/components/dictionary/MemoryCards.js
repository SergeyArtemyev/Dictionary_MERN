import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import memoryCards from '../../assets/js/memory_cards';

const MemoryCards = ({ words: { words, loading } }) => {
  useEffect(() => {
    !loading && words.length !== 0 && memoryCards(words);
  }, [words, loading]);

  return (
    <Fragment>
      {!loading && (
        <div data-target='Memory Cards' className='my-5 game flex-column'>
        <h2 className='heading-silver text-center mb-5'>Try to guess translation of the word</h2>
          <div className='main-card-container'>
            <div id='cards-container' className='cards'></div>
            <div className='navigation'>
              <button id='prev' className='nav-button'>
                <i className='fas fa-arrow-left'></i>
              </button>
              <p id='current'></p>
              <button id='next' className='nav-button'>
                <i className='fas fa-arrow-right'></i>
              </button>
            </div>
            <p className='text-center'>
              <cite>Click the card to see translation</cite>
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

MemoryCards.propTypes = {
  words: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  words: state.words,
});

export default connect(mapStateToProps, {})(MemoryCards);
