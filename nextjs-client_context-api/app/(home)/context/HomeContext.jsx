'use client';

import { createContext, useState } from 'react';
import axios from 'axios';

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);
  const [profilesData, setProfilesData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [profileIdToDelete, setProfileIdToDelete] = useState(null);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    <HomeContext.Provider
      value={{
        showModal,
        handleHideModal,
        handleDeleteProfile,
        handleSetProfile,
        handleShowModal,
        isProfileDeleted,
        setIsProfileDeleted,
        setShowLoadingModal,
        setShowSuccessModal,
        showLoadingModal,
        showSuccessModal,
        profilesData,
        setProfilesData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
