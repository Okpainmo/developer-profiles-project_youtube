import { Outlet } from 'react-router-dom';

function UpdateProfilePageWrapper() {
  return (
    <main className='my-[100px] px-3 sm:px-[10%]'>
      <Outlet />
    </main>
  );
}

export default UpdateProfilePageWrapper;
