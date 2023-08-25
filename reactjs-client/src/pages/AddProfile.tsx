import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type ProfileSpecs = {
  fullName: string;
  email: string;
  about: string;
  website: string;
};

function AddProfile() {
  useEffect(() => {
    document.title =
      'Add Profile | full stack project with the MERN stack, tailwind-css, and html.';
  }, []);

  const Navigate = useNavigate();

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [profileData, setProfileData] = useState<ProfileSpecs>({
    fullName: '',
    about: '',
    email: '',
    website: '',
  });

  async function handleCreateProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowLoadingModal(true);

    const { data: newProfile } = await axios.post<{
      profile: ProfileSpecs;
      responseMessage: string;
    }>(
      'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/create-profile',
      profileData
    );

    // console.log(newProfile);

    if (
      newProfile &&
      newProfile.responseMessage === 'profile created successfully'
    ) {
      setShowSuccessModal(true);
      setShowLoadingModal(false);
      setProfileData({
        fullName: '',
        about: '',
        email: '',
        website: '',
      });

      setTimeout(() => {
        setShowSuccessModal(false);

        Navigate('/');
      }, 3000);
    }
  }

  return (
    <main className='mt-[60px] mb-16 px-3 sm:px-[10%] relative'>
      {/* 1. pre-loader modal - loading  */}

      <div
        className={`pre-loader-modal_loading text-center mb-[30px] absolute top-0 w-[350px]  sm:w-[500px] left-0 right-0 mx-auto ${
          showLoadingModal ? 'block' : 'hidden'
        }`}
      >
        <p className='mt-4 text-sm px-4 py-3 font-semi-bold w-full bg-blue-50 text-blue-700'>
          Your profile is being created please wait...
        </p>
      </div>

      {/* 2. pre-loader modal - success */}

      <div
        className={`pre-loader-modal_success text-center mb-[30px] absolute top-0 w-[350px] sm:w-[500px] left-0 right-0 mx-auto ${
          showSuccessModal ? 'block' : 'hidden'
        }`}
      >
        <p className='mt-4 text-sm px-4 py-3 font-semi-bold w-full bg-green-50 text-green-700'>
          Profile created successfully.
        </p>
      </div>
      <header className='text-center mb-10 sm:mb-16'>
        <h1 className='text-blue-900 text-2xl sm:text-3xl font-bold poppins'>
          Add Developer Profile
        </h1>
        <p className='text-[16px] mt-3'>
          Please use a different/unique email for every profile you're creating.
        </p>
      </header>
      <section className='form-wrapper w-full md:w-[600px] mx-auto'>
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
                // type='text'
                value={profileData.about}
                onChange={(e) => {
                  setProfileData({ ...profileData, about: e.target.value });
                }}
                rows={7}
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
      </section>
    </main>
  );
}

export default AddProfile;
