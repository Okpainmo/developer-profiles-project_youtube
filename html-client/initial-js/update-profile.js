const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const about = document.getElementById('about');
const website = document.getElementById('website');
const form = document.querySelector('.update-profile-form');
const preLoaderModal_Loading = document.querySelector(
  '.pre-loader-modal_loading'
);
const preLoaderModal_Success = document.querySelector(
  '.pre-loader-modal_success'
);

const urlParams = window.location.search;
const id = new URLSearchParams(urlParams).get('id');

// console.log(id);

const url = `https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/get-profile/${id}`;

const handleFetchData = async () => {
  const response = await fetch(url);
  const fetchedData = await response.json();

  if (
    fetchedData &&
    fetchedData.responseMessage === 'profile fetched successfully'
  ) {
    fullName.value = fetchedData.profile.fullName;
    email.value = fetchedData.profile.email;
    about.value = fetchedData.profile.about;
    website.value = fetchedData.profile.website;

    // console.log(fetchedData.profile);
  } else {
    alert(
      'The requested profile could not be fetched. Please check your network and try again'
    );
  }
};

handleFetchData();

async function handleUpdateProfile(e) {
  e.preventDefault();

  preLoaderModal_Loading.style.display = 'block';

  const updateToProfile = {
    fullName: fullName.value,
    email: email.value,
    about: about.value,
    website: website.value,
  };

  const updatedProfile = await axios.patch(
    `https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/update-profile/${id}`,
    updateToProfile
  );

  if (
    updatedProfile &&
    updatedProfile.data.responseMessage === 'profile updated successfully'
  ) {
    preLoaderModal_Loading.style.display = 'none';
    preLoaderModal_Success.style.display = 'block';

    fullName.value = '';
    email.value = '';
    about.value = '';
    website.value = '';

    setTimeout(() => {
      preLoaderModal_Success.style.display = 'none';

      window.location.href = '../index.html';
    }, 3000);
  }
}

form.addEventListener('submit', handleUpdateProfile);
