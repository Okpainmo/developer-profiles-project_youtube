import Navbar from './components/Navbar';
import ProfileCardsWrapper from './components/ProfileCardsWrapper';
import HomeOverlay from './components/HomeOverlay';

export const metadata = {
  title:
    'Home | full stack project with the MERN stack, tailwind-css, and html.',
  description:
    'full stack project with the MERN stack, tailwind-css, and html.',
};

export const dynamic = 'force-dynamic';

async function Home() {
  const url =
    'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';

  const res = await fetch(
    url
    // , {cache: 'no-cache'}
  );
  // console.log(res);

  const serverData = await res.json();

  return (
    <main className='main-wrapper bg-blue-50 min-h-screen pb-[100px]'>
      <HomeOverlay />
      <div className='bg-blue-50 px-3 pt-6 pb-10 sm:px-10 md:px-6 xl:px-[10%]'>
        <Navbar serverData={serverData} />
        <ProfileCardsWrapper serverData={serverData} />
      </div>
    </main>
  );
}

export default Home;
