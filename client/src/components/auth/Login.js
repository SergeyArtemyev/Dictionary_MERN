import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dictionary' />;
  }

  return (
    <form id='register-form' onSubmit={(e) => onSubmit(e)}>
      <h3 className='text-center text-silver-2 mb-4'>Sign In</h3>
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
        <input className='btn btn-block btn-silver' type='submit' value='Login' />
      </div>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
