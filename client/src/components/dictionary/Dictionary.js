import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWord, loadWords, deleteWord } from '../../actions/words';
import Words from './Words';

const Dictionary = ({ addWord, loadWords, deleteWord, auth, words: { loading, words } }) => {
  // Load words
  useEffect(() => {
    loadWords();
    // eslint-disable-next-line
  }, [loadWords]);

  const [formData, setFromData] = useState({
    eng: '',
    rus: '',
  });

  const { eng, rus } = formData;

  const onChange = (e) => setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addWord(eng, rus);
    setFromData({
      eng: '',
      rus: '',
    });
  };

  return (
    <Fragment>
      <div className='my-5'>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='eng'
              value={eng}
              onChange={(e) => onChange(e)}
              placeholder='English word'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='rus'
              onChange={(e) => onChange(e)}
              value={rus}
              placeholder='Translation'
            />
          </div>
          <input className='btn btn-success btn-block' type='submit' value='Add Word' />
        </form>
      </div>
      {!loading && (
        <ul id='words-collection' className='list-group'>
          <Words words={words} deleteWord={deleteWord} auth={auth} />
        </ul>
      )}
    </Fragment>
  );
};

Dictionary.propTypes = {
  addWord: PropTypes.func.isRequired,
  loadWords: PropTypes.func.isRequired,
  deleteWord: PropTypes.func.isRequired,
  words: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  words: state.words,
  auth: state.auth,
});

export default connect(mapStateToProps, { addWord, loadWords, deleteWord })(Dictionary);
