'use client';

function NavbarCountWrapper({ data }) {
  return (
    <div className='px-2 py-1 bg-blue-900 text-white min-w-[20px] rounded font-bold text-center w-[50px]'>
      {data ? data.profilesCount : 'X'}
    </div>
  );
}

export default NavbarCountWrapper;
