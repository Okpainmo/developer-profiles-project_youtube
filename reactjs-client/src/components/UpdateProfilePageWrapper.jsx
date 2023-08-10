import { Outlet } from 'react-router-dom';

function UpdateProfilePageWrapper() {
  return (
    <main className='mt-[60px] mb-16 px-3 sm:px-[10%]'>
      <Outlet />
    </main>
  );
}

export default UpdateProfilePageWrapper;
