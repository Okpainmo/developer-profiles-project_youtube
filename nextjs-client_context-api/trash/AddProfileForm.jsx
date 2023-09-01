import React from 'react';
import { useContext } from 'react';
import { HomeContext } from '../app/context/HomeContext';

function AddProfileForm() {
  const [profileData, setProfileData] = useState({
    fullName: '',
    about: '',
    email: '',
    website: '',
  });

  return (
    <form onSubmit={handleCreateProfile} className='add-profile-form'>
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
        className='add-profile-form-button text-center w-full bg-blue-900 text-white px-6 py-3 mt-10 font-bold rounded poppins'
      >
        Add profile
      </button>
    </form>
  );
}

export default AddProfileForm;
