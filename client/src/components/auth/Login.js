import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
  };

  return (
    <form id='register-form' onSubmit={(e) => onSubmit(e)}>
      <h3 className='text-center'>Sign In</h3>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          placeholder='Email'
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          placeholder='Password'
          required
        />
      </div>
      <div className='form-group'>
        <input className='btn btn-block btn-primary' type='submit' value='Login' />
      </div>
    </form>
  );
};

export default Login;
