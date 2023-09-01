// import dynamic from 'next/dynamic';
import UpdateProfile from './updateProfile';
import axios from 'axios';

export const metadata = {
  title:
    'Update Profile | full stack project with the MERN stack, tailwind-css, and html.',
  description:
    'full stack project with the MERN stack, tailwind-css, and html.',
};

async function UpdateProfilePageWrapper({ params }) {
  const profileId = params.updateProfilePageId;

  const url = `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-profile/${profileId}`;

  const { data } = await axios.get(url);

  return (
    <main className='mt-[60px] mb-16 px-3 sm:px-[10%] relative'>
      <UpdateProfile data={data} profileId={profileId} />
    </main>
  );
}

export default UpdateProfilePageWrapper;
