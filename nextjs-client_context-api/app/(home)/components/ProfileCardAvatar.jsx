'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { HomeContext } from '../context/HomeContext';
import deleteIconImage from '../../assets/images/delete-icon.png';

function ProfileCardAvatar({ id }) {
  const { handleSetProfile, handleShowModal } = useContext(HomeContext);

  return (
    <Image
      src={deleteIconImage}
      onClick={() => {
        handleSetProfile(id);
        handleShowModal();
      }}
      className='delete-profile-icon w-6 cursor-pointer'
      alt='delete-icon'
    />
  );
}

export default ProfileCardAvatar;
