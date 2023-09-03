'use client';

import { useContext, useEffect, useCallback } from 'react';
import ProfileCard from './ProfileCard';
import { HomeContext } from '../context/HomeContext';

function ProfileCardsWrapper({ serverData }) {
  const {
    profilesData,
    setProfilesData,
    isProfileDeleted,
    setIsProfileDeleted,
  } = useContext(HomeContext);

  // console.log(profilesData);
  // console.log(serverData);

  useEffect(() => {
    async function handleFetchData() {
      const url =
        'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';

      const res = await fetch(url);
      // console.log(res);

      const data = await res.json();
      setProfilesData(data);
      setIsProfileDeleted(false);
    }

    handleFetchData();
  }, [isProfileDeleted, setIsProfileDeleted, setProfilesData]);

  if (!profilesData && !serverData) {
    return (
      <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
        Loading developer profiles...
      </p>
    );
  }

  if (
    (profilesData && profilesData.length < 1) ||
    (serverData && serverData.profiles.length < 1)
  ) {
    return (
      <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
        No profiles added yet!!! <br /> Please add add one or more profiles to
        see them here.
      </p>
    );
  }

  // This conditional renders the data from the server-fetch until the data for the client-fetch is ready and available.

  if (!profilesData && serverData && serverData.profiles.length > 0) {
    return (
      <section
        className='profile-cards-wrapper mt-8 sm:mt-20 flex flex-col gap-6 md:mx-auto md:gap-y-12 justify-center md:gap-x-16 md:flex md:flex-wrap md:flex-row'
        id='profileCardsWrapper'
      >
        {serverData.profiles.map((profile) => {
          const { _id } = profile;

          return <ProfileCard key={_id} developerProfile={profile} />;
        })}
      </section>
    );
  }

  if (profilesData && profilesData.profiles.length > 0) {
    return (
      <section
        className='profile-cards-wrapper mt-8 sm:mt-20 flex flex-col gap-6 md:mx-auto md:gap-y-12 justify-center md:gap-x-16 md:flex md:flex-wrap md:flex-row'
        id='profileCardsWrapper'
      >
        {profilesData.profiles.map((profile) => {
          const { _id } = profile;

          return <ProfileCard key={_id} developerProfile={profile} />;
        })}
      </section>
    );
  }
}

export default ProfileCardsWrapper;
