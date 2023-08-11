// import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateProfile() {
  const Navigate = useNavigate();
  const { profileId } = useParams();

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: '',
    about: '',
    email: '',
    website: '',
  });

  useEffect(() => {
    // set page title

    document.title =
      'Update Profile | full stack project with the MERN stack, tailwind-css, and html.';

    // fetch user and add to the update profile form

    const url = `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-profile/${profileId}`;

    const handleGetProfile = async () => {
      // implementing data fetching with axios

      const profileData = await axios.get(url);
      // console.log(profileData.data);

      /* implementing data fetching with the fetch API

      const response = await fetch(url);
      const fetchedData = await response.json();
       console.log(fetchedData);

       return fetchedData; */

      setProfileData({
        fullName: profileData.data.profile.fullName,
        about: profileData.data.profile.about,
        email: profileData.data.profile.email,
        website: profileData.data.profile.website,
      });
    };

    handleGetProfile();
  }, []);

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

      Navigate('/');
    }, 3000);
  }

  return (
    <>
      {/* 1. pre-loader modal - loading  */}

      <div
        className={`pre-loader-modal_loading text-center mb-[30px] absolute top-0 w-[350px]  sm:w-[500px] sm:mx-auto left-0 right-0 mx-auto ${
          showLoadingModal ? 'block' : 'hidden'
        }`}
      >
        <p className='mt-4 text-sm px-4 py-3 font-semi-bold w-full bg-blue-50 text-blue-700'>
          Your profile is being updated please wait...
        </p>
      </div>

      {/* 2. pre-loader modal - success */}

      <div
        className={`pre-loader-modal_success text-center mb-[30px] absolute top-0 w-[350px] sm:w-[500px] sm:mx-auto left-0 right-0 mx-auto ${
          showSuccessModal ? 'block' : 'hidden'
        }`}
      >
        <p className='mt-4 text-sm px-4 py-3 font-semi-bold w-full bg-green-50 text-green-700'>
          Profile updated successfully.
        </p>
      </div>

      <header className='text-center mb-10 sm:mb-16'>
        <h1 className='text-blue-900 text-2xl sm:text-3xl font-bold poppins'>
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
