import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('Success');
    }
  };

  return (
    <form id='register-form' onSubmit={(e) => onSubmit(e)}>
      <h3 className='text-center'>Register form</h3>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          name='name'
          value={name}
          onChange={(e) => onChange(e)}
          placeholder='Username'
          required
        />
      </div>
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
        <input
          type='password'
          className='form-control'
          name='password2'
          value={password2}
          onChange={(e) => onChange(e)}
          placeholder='Confirm password'
          required
        />
      </div>
      <div className='form-group'>
        <input className='btn btn-block btn-primary' type='submit' value='Sing Up' />
      </div>
    </form>
  );
};

export default Register;
