import { useContext, useEffect } from 'react';
import axios from 'axios';
import { HomeContext } from '../context/HomeContext';
import Navbar from '../components/Navbar';
import ProfileCardsWrapper from '../components/ProfileCardsWrapper';

function Home() {
  const {
    showModal,
    handleHideModal,
    handleDeleteProfile,
    isProfileDeleted,
    setIsProfileDeleted,
    setProfilesData,
  } = useContext(HomeContext);

  useEffect(() => {
    document.title =
      'Home | full stack project with the MERN stack, tailwind-css, and html.';
  }, []);

  useEffect(() => {
    const url =
      'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';

    const handleFetchData = async () => {
      // implementing data fetching with axios

      const { data: fetchedData } = await axios.get<ProfilesDataSpecs | null>(
        url
      );
      setProfilesData(fetchedData);
      // console.log(fetchedData);
    };
    handleFetchData();

    return () => {
      setIsProfileDeleted(false);
    };
  }, [isProfileDeleted]);

  return (
    <main className='main-wrapper bg-blue-50 min-h-screen pb-[100px]'>
      <section
        className={`px-3 fixed left-0 right-0 top-0 min-h-screen ${
          showModal ? 'flex' : 'hidden'
        } w-full justify-center items-center`}
        style={{ backgroundColor: 'rgba(22, 21, 21, 0.8)' }}
        //   style='background-color: rgba(22, 21, 21, 0.8)'
      >
        <div className='confirm-process-modal bg-white p-6 rounded w-full sm:w-[400px] sm:mx-auto'>
          <h3 className='text-lg leading-6 text-gray-900 poppins font-bold'>
            Delete an developer profile.
          </h3>
          <p className='mt-4 text-sm text-gray-500'>
            You are about to delete a developer profile. Are you sure you want
            to continue?
          </p>
          <div className='mt-6 flex gap-3' id='cancelDeleteProfileButton'>
            <button
              type='button'
              onClick={handleHideModal}
              className='poppins inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            >
              No, thanks!
            </button>
            <button
              type='button'
              onClick={handleDeleteProfile}
              id='confirmDeleteProfileButton'
              className='poppins inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
            >
              Yes delete.
            </button>
          </div>
        </div>
      </section>
      <div className='bg-blue-50 px-3 pt-6 pb-10 sm:px-10 md:px-6 xl:px-[10%]'>
        <Navbar />
        <ProfileCardsWrapper />
      </div>
    </main>
  );
}

// alternative implementation for useContext

// function Home() {
//   const HomeContentValues = useContext(HomeContext);

//   if (HomeContentValues) {
//     const {
//       showModal,
//       handleHideModal,
//       handleDeleteProfile,
//       isProfileDeleted,
//       setIsProfileDeleted,
//       setProfilesData,
//     } = HomeContentValues;

//     useEffect(() => {
//       document.title =
//         'Home | full stack project with the MERN stack, tailwind-css, and html.';
//     }, []);

//     useEffect(() => {
//       const url =
//         'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';

//       const handleFetchData = async () => {
//         // implementing data fetching with axios

//         const fetchedData = await axios.get(url);
//         setProfilesData(fetchedData.data);
//         console.log(fetchedData.data);

//         // implementing data fetching with the fetch API

//         // const response = await fetch(url);
//         // const fetchedData = await response.json();
//         // console.log(fetchedData);

//         // return fetchedData;
//       };
//       handleFetchData();

//       return () => {
//         setIsProfileDeleted(false);
//       };
//     }, [isProfileDeleted]);

//     return (
//       <main className='main-wrapper bg-blue-50 min-h-screen pb-[100px]'>
//         <section
//           className={`px-3 fixed left-0 right-0 top-0 min-h-screen ${
//             showModal ? 'flex' : 'hidden'
//           } w-full justify-center items-center`}
//           style={{ backgroundColor: 'rgba(22, 21, 21, 0.8)' }}
//           //   style='background-color: rgba(22, 21, 21, 0.8)'
//         >
//           <div className='confirm-process-modal bg-white p-6 rounded w-full sm:w-[400px] sm:mx-auto'>
//             <h3 className='text-lg leading-6 text-gray-900 poppins font-bold'>
//               Delete an developer profile.
//             </h3>
//             <p className='mt-4 text-sm text-gray-500'>
//               You are about to delete a developer profile. Are you sure you want
//               to continue?
//             </p>
//             <div className='mt-6 flex gap-3' id='cancelDeleteProfileButton'>
//               <button
//                 type='button'
//                 onClick={handleHideModal}
//                 className='poppins inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
//               >
//                 No, thanks!
//               </button>
//               <button
//                 type='button'
//                 onClick={handleDeleteProfile}
//                 id='confirmDeleteProfileButton'
//                 className='poppins inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
//               >
//                 Yes delete.
//               </button>
//             </div>
//           </div>
//         </section>
//         <div className='bg-blue-50 px-3 pt-6 pb-10 sm:px-10 md:px-6 xl:px-[10%]'>
//           <Navbar />
//           <ProfileCardsWrapper />
//         </div>
//       </main>
//     );
//   }
// }

export default Home;
