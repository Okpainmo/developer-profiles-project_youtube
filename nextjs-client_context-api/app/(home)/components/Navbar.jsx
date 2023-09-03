'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { HomeContext } from '../context/HomeContext';
import NavbarCountWrapper from './NavbarCountWrapper';

function Navbar({ serverData }) {
  const { profilesData } = useContext(HomeContext);

  if (!profilesData && serverData) {
    return (
      <nav className='navbar flex gap-4 justify-between items-center w-full'>
        <div className='flex gap-3 items-center text-[14px] sm:text-[16px]'>
          <div className='font-semibold poppins'>Developer Profiles</div>
          <NavbarCountWrapper data={serverData} />{' '}
          <span className='text-blue-500 underline'>
            Just to test load time speed
          </span>
        </div>
        <Link
          href='/add-profile'
          className='px-6 py-2 font-bold bg-black text-white rounded text-center text-[12px] sm:text-[16px] poppins'
        >
          Add Profile
        </Link>
      </nav>
    );
  }

  if (profilesData) {
    // console.log(data);

    return (
      <nav className='navbar flex gap-4 justify-between items-center w-full'>
        <div className='flex gap-3 items-center text-[14px] sm:text-[16px]'>
          <div className='font-bold poppins'>Developer Profiles</div>
          <NavbarCountWrapper data={profilesData} />
          {/* <span className='text-blue-500 underline'>
            Just to test load time speed
          </span> */}
        </div>
        <Link
          href='/add-profile'
          className='px-6 py-2 font-bold bg-black text-white rounded text-center text-[12px] sm:text-[16px] poppins'
        >
          Add Profile
        </Link>
      </nav>
    );
  }
}

export default Navbar;
