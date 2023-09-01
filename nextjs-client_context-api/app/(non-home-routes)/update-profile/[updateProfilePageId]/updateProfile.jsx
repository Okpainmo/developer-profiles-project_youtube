'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { poppins } from '../../../utils/fonts';
import PopUpsWrapper from '../../components/PopUpsWrapper';

function UpdateProfile({ data, profileId }) {
  // console.log(profileId);
  const router = useRouter();

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: data.profile.fullName,
    about: data.profile.about,
    email: data.profile.email,
    website: data.profile.website,
  });

  async function handleUpdateProfile(e) {
    e.preventDefault();
    setShowLoadingModal(true);

    const updatedProfile = await axios.patch(
      `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/update-profile/${profileId}`,
      profileData
    );
    // console.log(updatedProfile);

    if (
      updatedProfile &&
      updatedProfile.data.responseMessage === 'profile updated successfully'
    ) {
      setShowSuccessModal(true);
      setShowLoadingModal(false);
      setProfileData({
        fullName: '',
        about: '',
        email: '',
        website: '',
      });
    }

    setTimeout(() => {
      setShowSuccessModal(false);

      router.push('/');
    }, 2000);
  }

  return (
    <>
      <PopUpsWrapper
        showLoadingModal={showLoadingModal}
        showSuccessModal={showSuccessModal}
        requestType='update'
      />
      <header className='text-center mb-10 sm:mb-16'>
        <h1 className='poppins text-blue-900 text-2xl sm:text-3xl font-bold'>
          Update Developer Profile
        </h1>
        <p className='text-[16px] mt-3'>
          Ensure to use a different/unique email for this profile.
        </p>
      </header>
      <section className='form-wrapper w-full md:w-[600px] mx-auto'>
        <form onSubmit={handleUpdateProfile} className='update-profile-form'>
          <div className='full-name-and-email-wrapper flex flex-col gap-4 mt-8 w-full'>
            <div className='input-group flex flex-col'>
              <label className='font-bold poppins' htmlFor='fullName'>
                Full name
              </label>
              <input
                id='fullName'
                type='text'
                value={profileData.fullName}
                onChange={(e) => {
                  setProfileData({ ...profileData, fullName: e.target.value });
                }}
                placeholder='full name'
                required={true}
                className='rounded border px-3 outline-none py-2 mt-3 text-gray-600'
              />
            </div>
            <div className='input-group flex flex-col'>
              <label className='font-bold poppins' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                type='email'
                value={profileData.email}
                onChange={(e) => {
                  setProfileData({ ...profileData, email: e.target.value });
                }}
                placeholder='email'
                required={true}
                className='rounded border px-3 outline-none py-2 mt-3 text-gray-600'
              />
            </div>
          </div>
          <div className='website-and-about-wrapper flex flex-col gap-4 mt-8 w-full'>
            <div className='input-group flex flex-col'>
              <label className='font-bold poppins' htmlFor='website'>
                Website
              </label>
              <input
                id='website'
                type='text'
                value={profileData.website}
                onChange={(e) => {
                  setProfileData({ ...profileData, website: e.target.value });
                }}
                placeholder='https://websiteexample.com'
                required={true}
                className='rounded border px-3 outline-none py-2 mt-3 text-gray-600'
              />
            </div>
            <div className='input-group flex flex-col'>
              <label className='font-bold poppins' htmlFor='about'>
                About
              </label>
              <textarea
                id='about'
                placeholder='developer bio'
                type='text'
                value={profileData.about}
                onChange={(e) => {
                  setProfileData({ ...profileData, about: e.target.value });
                }}
                rows='7'
                required={true}
                className='rounded border px-3 outline-none py-2 mt-3 text-gray-600'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='text-center w-full bg-blue-900 text-white px-6 py-3 mt-10 font-bold rounded poppins'
          >
            Update profile
          </button>
        </form>
      </section>
    </>
  );
}

export default UpdateProfile;
