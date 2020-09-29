import React from 'react';

const Words = ({ words, deleteWord, auth }) => {
  return (
    <>
      {words.map((word) => (
        <li className='list-group-item' key={word._id}>
          {`${word.word.eng} - ${word.word.rus}`}{' '}
          <a href='#!'>
            <i className='fas fa-volume-up'></i>
          </a>
          {!auth.loading && word.user === auth.user._id && (
            <button
              className='delete-word text-danger float-right'
              onClick={() => deleteWord(word._id)}
            >
              <i className='fas fa-trash-alt'></i>
            </button>
          )}
        </li>
      ))}
    </>
  );
};

export default Words;
