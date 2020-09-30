import React from 'react';
import Avatar from '../../../../../img/user.jpg';

const Profile = () => {
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
      <a href='#!' className='btn-logout text-silver-2'>
        Logout <i className='fas fa-sign-out-alt'></i>
      </a>
    </div>
  );
};

export default Profile;
