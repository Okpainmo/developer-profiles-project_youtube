const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const about = document.getElementById('about');
const website = document.getElementById('website');
const form = document.querySelector('.add-profile-form');
const preLoaderModal_Loading = document.querySelector(
  '.pre-loader-modal_loading'
);
const preLoaderModal_Success = document.querySelector(
  '.pre-loader-modal_success'
);

async function handleAddProfile(e) {
  e.preventDefault();
  preLoaderModal_Loading.style.display = 'block';

  const profile = {
    fullName: fullName.value,
    email: email.value,
    about: about.value,
    website: website.value,
  };

  const newProfile = await axios.post(
    'https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/create-profile',
    profile
  );

  if (
    newProfile &&
    newProfile.data.responseMessage === 'profile created successfully'
  ) {
    preLoaderModal_Loading.style.display = 'none';
    preLoaderModal_Success.style.display = 'block';

    fullName.value = '';
    email.value = '';
    about.value = '';
    website.value = '';

    setTimeout(() => {
      window.location.href = '../index.html';
    }, 3000);
  }
}

form.addEventListener('submit', handleAddProfile);
