import { useEffect, useState } from 'react';
import axios from 'axios';
// import ModalOverlay from '../../trash/ModalOverlay';
import Navbar from '../components/Navbar';
import ProfileCardsWrapper from '../components/ProfileCardsWrapper';

function Home() {
  const [profilesData, setProfilesData] = useState(null);
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profileIdToDelete, setProfileIdToDelete] = useState(null);

  useEffect(() => {
    document.title =
      'Home | full stack project with the MERN stack, tailwind-css, and html.';
  }, []);

  useEffect(() => {
    const url =
      'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';

    const handleFetchData = async () => {
      // implementing data fetching with axios

      const fetchedData = await axios.get(url);
      setProfilesData(fetchedData.data);
      console.log(fetchedData.data);

      // implementing data fetching with the fetch API

      // const response = await fetch(url);
      // const fetchedData = await response.json();
      // console.log(fetchedData);

      // return fetchedData;
    };
    handleFetchData();

    return () => {
      setIsProfileDeleted(false);
    };
  }, [isProfileDeleted]);

  async function handleDeleteProfile() {
    console.log(profileIdToDelete);
    handleHideModal();

    const deletedProfile = await axios.delete(
      `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/delete-profile/${profileIdToDelete}`
    );

    console.log(deletedProfile);

    if (
      deletedProfile &&
      deletedProfile.data.responseMessage === 'profile deleted successfully'
    ) {
      setIsProfileDeleted(true);
    }
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  function handleSetProfile(id) {
    setProfileIdToDelete(id);
  }

  return (
    <main className='main-wrapper bg-blue-50 min-h-screen pb-[100px]'>
      {/* <ModalOverlay
        showModal={showModal}
        handleHideModal={handleHideModal}
        // handleDeleteProfile={handleDeleteProfile}
      /> */}
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
        <ProfileCardsWrapper
          profilesData={profilesData}
          handleShowModal={handleShowModal}
          handleSetProfile={handleSetProfile}
        />
      </div>
    </main>
  );
}

export default Home;
