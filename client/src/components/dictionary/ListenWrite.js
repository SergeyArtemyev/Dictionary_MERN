import React, { Fragment, useEffect, useState } from 'react';
import listenWrite, { checkWords, speak } from '../../assets/js/listenWrite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ListenWrite = ({words: { words, loading }}) => {
  useEffect(()=>{
    !loading && words.length !== 0 && listenWrite(words)
  }, [loading, words])

  const [formData, setFormData] = useState({
    eng: ''
  })

  const { eng } = formData;

  const onChange = e => setFormData({...formData, eng: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    checkWords();
    setFormData({
      eng: '',
    })
  }

  return (
    <Fragment>
      {!loading && (
        <div id='listen-write' data-target='Listen and write' className='game flex-column align-items-center'>
          <h2 className='heading-silver mt-5 mb-3'>Listen and Write</h2>
          <div className='d-flex flex-column justify-content-center align-items-center box p-3'>
            <i className='fas fa-volume-up pb-3 listen-icon' onClick={()=> speak()}></i>
            <div className="d-flex flex-column w-100 bg-white p-3">
              <p>
                English: <span className='hidden-eng-word'></span>
              </p>
              <p>
                 Russian: <span className='rus-word'></span>
              </p>
            </div>
            <div className="guess-container">
              <h3 className='text-center my-2'>Write in English</h3>
              <form onSubmit={e => onSubmit(e)}>
                <input type="text" name='eng' className='guess-word' autoComplete='off' onChange={e=> onChange(e)} value={eng}/>
                <button type="submit">Check</button>
              </form>
            </div>
            <div className="guess-result">
              <h3 className='text-center'>Correct!</h3>
              <button onClick={()=> listenWrite(words)}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

ListenWrite.propTypes = {
  words: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  words: state.words
})

export default connect(mapStateToProps, {})(ListenWrite)
