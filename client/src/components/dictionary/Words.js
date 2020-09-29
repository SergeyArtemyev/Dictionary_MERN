import React from 'react';

const Words = ({ words, deleteWord, auth }) => {
  return (
    <>
      {words.map((word) => (
        <li className='list-group-item d-flex align-items-center' key={word._id}>
          <a href='#!'>
            <i className='fas fa-volume-up'></i>
          </a>
          <div className='d-flex flex-column ml-3'>
            <span className='font-weight-bold text-primary'>{word.word.eng}</span>
            <span>{word.word.rus}</span>
          </div>
          {!auth.loading && word.user === auth.user._id && (
            <button
              className='delete-word text-danger ml-auto'
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
