// import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({ profilesData }) {
  return (
    <nav className='navbar flex gap-4 justify-between items-center w-full'>
      <div className='flex gap-3 items-center text-[14px] sm:text-[16px]'>
        <div className='font-bold poppins'>Developer Profiles</div>
        <div
          className='px-2 py-1 bg-blue-900 text-white min-w-[20px] rounded font-bold text-center w-[50px]'
          id='userCount'
        >
          {profilesData ? profilesData.profilesCount : 'X'}
        </div>
      </div>
      <Link
        to='/add-profile'
        className='px-6 py-2 font-bold bg-black text-white rounded text-center text-[12px] sm:text-[16px] poppins'
      >
        Add Profile
      </Link>
    </nav>
  );
}

export default Navbar;
