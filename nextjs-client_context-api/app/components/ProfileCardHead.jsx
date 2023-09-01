'use client';

import Link from 'next/link';
import ProfileCardAvatar from './ProfileCardAvatar';

function ProfileCardHead({ id, fullName }) {
  return (
    <section className='profile-card-head flex justify-between items-center'>
      <div className='poppins font-bold user_image bg-pink-200 w-[50px] h-[50px] rounded-full text-center text-[28px] p-[5px]'>
        {fullName.charAt(0).toUpperCase()}
      </div>
      <div className='flex justify-between w-[70px] items-center'>
        <Link
          className='update-profile-page-link'
          href={`update-profile/${id}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z' />
            <path d='M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z' />
          </svg>
        </Link>
        <ProfileCardAvatar id={id} />
      </div>
    </section>
  );
}

export default ProfileCardHead;
