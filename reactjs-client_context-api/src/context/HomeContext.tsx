import { createContext, useState } from 'react';
import axios from 'axios';

export const HomeContext = createContext({} as HomeContextProps);
/* export const HomeContext = createContext<ContextProps | null>(null); - alternative method - check the Home.tsx page 
component for commented code with a complementary usage implementation. */

function HomeContextProvider({ children }: ChildProp) {
  const [profilesData, setProfilesData] = useState<ProfilesDataSpecs | null>(
    null
  );
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profileIdToDelete, setProfileIdToDelete] = useState<
    number | string | null
  >(null);

  async function handleDeleteProfile() {
    // console.log(profileIdToDelete);
    handleHideModal();

    const { data: deletedProfile } = await axios.delete<{
      deletedProfile: ProfileSpecs;
      responseMessage: string;
    }>(
      `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/delete-profile/${profileIdToDelete}`
    );

    // console.log(deletedProfile);

    if (
      deletedProfile &&
      deletedProfile.responseMessage === 'profile deleted successfully'
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

  function handleSetProfile(id: number | string | null) {
    setProfileIdToDelete(id);
  }

  return (
    <HomeContext.Provider
      value={{
        showModal,
        handleHideModal,
        handleDeleteProfile,
        profilesData,
        handleSetProfile,
        handleShowModal,
        isProfileDeleted,
        setIsProfileDeleted,
        setProfilesData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
