import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
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
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dictionary' />;
  }

  return (
    <form id='register-form' onSubmit={(e) => onSubmit(e)}>
      <h3 className='text-center text-silver-2 mb-4'>FREE REGISTRATION</h3>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          name='name'
          value={name}
          onChange={(e) => onChange(e)}
          placeholder='Username'
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
        />
      </div>
      <div className='form-group'>
        <input className='btn btn-block btn-silver' type='submit' value='Sing Up' />
      </div>
    </form>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
