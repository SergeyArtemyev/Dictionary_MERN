import React, { Fragment } from 'react';
import NerdLabel from '../../img/nerd-label.png';
import NerdBook from '../../img/nerd-book.png';
import NerdScary from '../../img/nerd-scary.png';
import NerdArms from '../../img/nerd-arms.png';
import NerdLaying from '../../img/nerd-laying.png';
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
      <section id='showcase'>
        <div className='row no-gutters'>
          <div className='col-6'>
            <h1 className='heading-silver mt-3'>Dictionary</h1>
          </div>
          <div className='col-6 d-flex flex-column justify-content-center align-items-center mt-5'>
            <img className='label-img mb-5' src={NerdLabel} alt='nerd label' />
            <div className='auth-form-wrapper'>
              {!isRegistered ? <Register /> : <Login />}
              {!isRegistered ? (
                <p className='mb-0 text-silver'>
                  Already have an account?{' '}
                  <a href='!#' className='link-silver' onClick={(e) => onClick(e)}>
                    Login
                  </a>
                </p>
              ) : (
                <p className='mb-0 text-silver'>
                  Don't have an account?{' '}
                  <a href='!#' className='link-silver' onClick={(e) => onClick(e)}>
                    Sign Up
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='showcase-footer'>
          <p className='text-silver-2 box box-silver'>
            Welcome to your own Dictionary! Here you can add words to your vocabulary and learn them
            in a fun way with our games! What games you ask?{' '}
            <a href='#about' className='link-silver'>
              Check this out!
            </a>
          </p>
        </div>
      </section>
      <section id='about'>
        <div className='overlay'></div>
        <div className='row no-gutters'>
          <div className='col-6'>
            <div className='about-demo d-flex align-items-center justify-content-center'>
              <p className='box box-silver-2 text-silver-2'>Learn new words with cards</p>
            </div>
          </div>
          <div className='col-6'>
            <div className='showcase d-flex align-items-center justify-content-center'>
              <div className='demo mr-5'>Screenshot or gif</div>
              <img src={NerdBook} alt='Nerd with a book' />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='row no-gutters'>
          <div className='col-6'>
            <div className='showcase d-flex align-items-center justify-content-center'>
              <img src={NerdScary} alt='Nerd with a book' />
              <div className='demo ml-5'>Screenshot or gif</div>
            </div>
          </div>
          <div className='col-6'>
            <div className='about-demo d-flex align-items-center justify-content-center'>
              <p className='box box-silver-2 text-silver-2'>Translate words on speed</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='row no-gutters'>
          <div className='col-6'>
            <div className='about-demo d-flex align-items-center justify-content-center'>
              <p className='box box-silver-2 text-silver-2'>Practice your listening skills</p>
            </div>
          </div>
          <div className='col-6'>
            <div className='showcase d-flex align-items-center justify-content-center'>
              <div className='demo mr-5'>Screenshot or gif</div>
              <img src={NerdArms} alt='Nerd with a book' />
            </div>
          </div>
        </div>
        <div className='about-footer'>
          <img src={NerdLaying} alt='nerd laying' />
          <h3 className='box box-silver-2 text-silver'>
            And many other things that you can do in your own Dictionary
          </h3>
        </div>
      </section>
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
