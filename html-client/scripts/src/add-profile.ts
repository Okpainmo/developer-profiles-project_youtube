const updateFormFullName = document.getElementById(
  'fullName'
) as HTMLInputElement | null;
const updateFormEmail = document.getElementById(
  'email'
) as HTMLInputElement | null;
const updateFormAbout = document.getElementById(
  'about'
) as HTMLInputElement | null;
const updateFormWebsite = document.getElementById(
  'website'
) as HTMLInputElement | null;
const updateProfileForm = document.querySelector(
  '.add-profile-form'
) as HTMLFormElement | null;
const UpdateProfilePreLoaderModal_Loading = document.querySelector(
  '.pre-loader-modal_loading'
) as HTMLElement | null;
const UpdateProfilePreLoaderModal_Success = document.querySelector(
  '.pre-loader-modal_success'
) as HTMLElement | null;

async function handleAddProfile(e: Event) {
  e.preventDefault();
  UpdateProfilePreLoaderModal_Loading &&
    (UpdateProfilePreLoaderModal_Loading.style.display = 'block');

  const profile = {
    fullName: updateFormFullName && updateFormFullName.value,
    email: updateFormEmail && updateFormEmail.value,
    about: updateFormAbout && updateFormAbout.value,
    website: updateFormWebsite && updateFormWebsite.value,
  };

  const newProfile = await axios.post(
    'https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/create-profile',
    profile
  );

  if (
    newProfile &&
    newProfile.data.responseMessage === 'profile created successfully'
  ) {
    UpdateProfilePreLoaderModal_Loading &&
      (UpdateProfilePreLoaderModal_Loading.style.display = 'none');
    UpdateProfilePreLoaderModal_Success &&
      (UpdateProfilePreLoaderModal_Success.style.display = 'block');

    updateFormFullName && (updateFormFullName.value = '');
    updateFormEmail && (updateFormEmail.value = '');
    updateFormAbout && (updateFormAbout.value = '');
    updateFormWebsite && (updateFormWebsite.value = '');

    setTimeout(() => {
      UpdateProfilePreLoaderModal_Success &&
        (UpdateProfilePreLoaderModal_Success.style.display = 'none');

      window.location.href = '../index.html';
    }, 2000);
  }
}

updateProfileForm &&
  updateProfileForm.addEventListener('submit', handleAddProfile);
