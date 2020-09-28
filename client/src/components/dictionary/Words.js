import React from 'react';

const Words = ({ words }) => {
  return (
    <>
      {words.map((word) => (
        <li key={word._id}>{`${word.word.eng} - ${word.word.rus}`}</li>
      ))}
    </>
  );
};

export default Words;
