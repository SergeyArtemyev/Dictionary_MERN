import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import Alert from '../layout/Alert';
import PropTypes from 'prop-types';
import { checkRequired, checkEmail, checkLength, checkPasswordsmatch, getInputs } from '../../assets/js/formValidation';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  let errors = [];

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(e.target.name === 'name'){
      checkLength(e.target, 3, 15, errors)
    }
    if(e.target.name === 'email'){
      checkEmail(e.target, errors);
    } else if (e.target.name === 'password') {
      checkLength(e.target, 6, 15, errors);
    } else if (e.target.name === 'password2'){
      checkPasswordsmatch(e.target, password, e.target.value, errors);
    }
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkRequired(getInputs(), errors)) {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dictionary' />;
  }

  return (
    <form id='register-form' onSubmit={(e) => onSubmit(e)}>
      <h3 className='text-center text-silver-2 mb-4'>
        FREE REGISTRATION
        <Alert/>
      </h3>
      <div className='form-group'>
        <input
          id='username'
          type='text'
          className='form-control'
          name='name'
          value={name}
          onChange={(e) => onChange(e)}
          placeholder='Username'
        />
        <small>Error message</small>
      </div>
      <div className='form-group'>
        <input
          id='email'
          type='email'
          className='form-control'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          placeholder='Email'
        />
        <small>Error message</small>
      </div>
      <div className='form-group'>
        <input
          id='password'
          type='password'
          className='form-control'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          placeholder='Password'
        />
        <small>Error message</small>
      </div>
      <div className='form-group'>
        <input
          id='password2'
          type='password'
          className='form-control'
          name='password2'
          value={password2}
          onChange={(e) => onChange(e)}
          placeholder='Confirm password'
        />
        <small>Error message</small>
      </div>
      <div className='form-group'>
        <input className='btn btn-block btn-silver' type='submit' value='Sing Up' />
      </div>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
