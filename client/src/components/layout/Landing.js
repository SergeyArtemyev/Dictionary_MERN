import React, { Fragment } from 'react';
import NerdLabel from '../../img/nerd-label.png';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { connect } from 'react-redux';
import { switchForm } from '../../actions/auth';
import PropTypes from 'prop-types';

const Landing = ({ isRegistered, switchForm }) => {
  const onClick = (e) => {
    e.preventDefault();
    switchForm();
  };

  return (
    <Fragment>
      <div id='showcase'>
        <div className='row no-gutters'>
          <div className='col-6'></div>
          <div className='col-6 d-flex flex-column justify-content-center align-items-center mt-5'>
            <img className='label-img mb-5' src={NerdLabel} alt='nerd label' />
            <div className='auth-form-wrapper'>
              {!isRegistered ? <Register /> : <Login />}
              {!isRegistered ? (
                <p className='mb-0 text-silver'>
                  Already have an account?{' '}
                  <a href='!#' onClick={(e) => onClick(e)}>
                    Login
                  </a>
                </p>
              ) : (
                <p className='mb-0 text-silver'>
                  Don't have an account?{' '}
                  <a href='!#' onClick={(e) => onClick(e)}>
                    Sign Up
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  switchForm: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isRegistered: state.auth.isRegistered,
});

export default connect(mapStateToProps, { switchForm })(Landing);
