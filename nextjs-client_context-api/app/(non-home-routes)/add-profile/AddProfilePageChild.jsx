'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import PopUpsWrapper from '../components/PopUpsWrapper';

function AddProfilePageChild() {
  const router = useRouter();

  const [developerProfileData, setDeveloperProfileData] = useState({
    fullName: '',
    email: '',
    website: '',
    about: '',
  });
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  async function handleAddProfile(e) {
    e.preventDefault();
    setShowLoadingModal(true);

    const url =
      'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/create-profile';
    const newProfile = await axios.post(url, developerProfileData);
    // console.log(newProfile);

    if (
      newProfile &&
      newProfile.data.responseMessage === 'profile created successfully'
    ) {
      setShowLoadingModal(false);
      setShowSuccessModal(true);

      setDeveloperProfileData({
        fullName: '',
        email: '',
        website: '',
        about: '',
      });

      setTimeout(() => {
        setShowSuccessModal(true);
        router.push('/');
      }, 2000);
    }
  }
  return (
    <>
      <PopUpsWrapper
        showLoadingModal={showLoadingModal}
        showSuccessModal={showSuccessModal}
        requestType='create'
      />

      <header className='section-header text-center'>
        <h1 className='text-3xl text-blue-900 font-bold poppins'>
          Add Developer Profile
        </h1>
        <p className='sm:text-[16px] mt-4'>
          Please use a different/unique email for every profile you're creating.
        </p>
      </header>
      <section className='form-wrapper mt-16'>
        <form onSubmit={handleAddProfile} className='add-profile-form'>
          <div className='full-name input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='fullName' className='text-[16px] font-bold'>
              Full name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='full name'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.fullName}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  fullName: e.target.value,
                });
              }}
            />
          </div>
          <div className='email input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='email' className='text-[16px] font-bold'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='email'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.email}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className='website input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='website' className='text-[16px] font-bold'>
              Website
            </label>
            <input
              id='website'
              type='text'
              placeholder='https://example-website.com'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.website}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  website: e.target.value,
                });
              }}
            />
          </div>
          <div className='about input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='about' className='text-[16px] font-bold'>
              About
            </label>
            <textarea
              rows='7'
              id='about'
              type='text'
              placeholder='developer bio'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.about}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  about: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 text-white bg-blue-900 mt-8 w-full text-[16px] font-bold'
          >
            Add Profile
          </button>
        </form>
      </section>
    </>
  );
}

export default AddProfilePageChild;
