import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../../img/user.jpg';
import { logout } from '../../../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = ({ logout, auth, words }) => {
  return (
    <div id='profile' className='d-flex flex-column align-items-center justify-content-center'>
      <img className='mb-2' src={Avatar} alt='user img' />
      <div className='username text-silver mb-3'>
        {!auth.loading && auth.user !== null && auth.user.name}
      </div>
      <div className='word-amount text-silver d-flex justify-content-between mb-1'>
        Words -----------------------------
        <span>{!auth.loading && words.length}</span>
      </div>
      <Link to='/' className='btn-logout text-silver-2' onClick={() => logout()}>
        Logout <i className='fas fa-sign-out-alt'></i>
      </Link>
    </div>
  );
};

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  words: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  words: state.words.words,
});

export default connect(mapStateToProps, { logout })(Profile);
