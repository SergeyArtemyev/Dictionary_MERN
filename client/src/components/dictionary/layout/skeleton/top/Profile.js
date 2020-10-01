import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../../img/user.jpg';
import { logout } from '../../../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = ({ logout }) => {
  return (
    <div id='profile' className='d-flex flex-column align-items-center justify-content-center'>
      <img className='mb-2' src={Avatar} alt='user img' />
      <div className='username text-silver mb-3'>User name</div>
      <div className='word-amount text-silver d-flex justify-content-between mb-1'>
        Words------------------------------<span>20</span>
      </div>
      <div className='user-level text-silver d-flex justify-content-between mb-4'>
        Level-------------------------------<span>20</span>
      </div>
      <Link to='/' className='btn-logout text-silver-2' onClick={() => logout()}>
        Logout <i className='fas fa-sign-out-alt'></i>
      </Link>
    </div>
  );
};

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Profile);
