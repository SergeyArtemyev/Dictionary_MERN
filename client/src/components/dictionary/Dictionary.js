import React, { useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
  const [formData, setFromData] = useState({
    eng: '',
    rus: '',
  });

  const { eng, rus } = formData;

  const onChange = (e) => setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const word = {
      eng,
      rus,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(word);
      console.log(body);
      const res = await axios.post('/api/words', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
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
  );
};

export default Dictionary;
