// import axios from 'axios';

// global variables

const updateProfileFullName = document.getElementById(
  'fullName'
) as HTMLInputElement | null;
const updateProfileFormEmail = document.getElementById(
  'email'
) as HTMLInputElement | null;
const updateProfileFormAbout = document.getElementById(
  'about'
) as HTMLInputElement | null;
const updateProfileFormWebsite = document.getElementById(
  'website'
) as HTMLInputElement | null;
const updateProfileForm = document.querySelector(
  '.update-profile-form'
) as HTMLFormElement | null;
const preLoaderModal_Loading = document.getElementById(
  'preLoaderModal_Loading'
);
const preLoaderModal_Success = document.getElementById(
  'preLoaderModal_Success'
);

const urlParams = window.location.search;
const id = new URLSearchParams(urlParams).get('id');

// console.log(id);
try {
  if (
    !updateProfileFullName ||
    !updateProfileFormEmail ||
    !updateProfileFormAbout ||
    !updateProfileFormWebsite
  ) {
    throw new Error(
      'form input error: form input(s) could not be found'
      // display this in a modal for real world builds
    );
  }

  if (!updateProfileForm) {
    throw new Error(
      `form error: form is not defined. form is ${updateProfileForm}`
    );
    // display this in a modal for real world builds
  }

  const handleFetchProfileToUpdate = async () => {
    const updateProfileUrl = `https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/get-profile/${id}`;

    try {
      const response = await fetch(updateProfileUrl);
      const fetchedData: { responseMessage: string; profile: ProfileSpecs } =
        await response.json();
      console.log(fetchedData);

      if (
        fetchedData &&
        fetchedData.responseMessage === 'profile fetched successfully'
      ) {
        updateProfileFullName.value = fetchedData.profile.fullName;
        updateProfileFormEmail.value = fetchedData.profile.email;
        updateProfileFormAbout.value = fetchedData.profile.about;
        updateProfileFormWebsite.value = fetchedData.profile.website;
      } else {
        throw new Error(
          'request unsuccessful: developer profile could not be fetched'
          // display this in a modal for real world builds
        );
      }
    } catch (error) {
      error instanceof Error
        ? console.log(error.message)
        : console.log(`Error: unknown error`);

      // show error message in modal/pop-up for real-world builds.
    }
  };

  handleFetchProfileToUpdate();

  async function handleUpdateProfile(e: SubmitEvent) {
    try {
      e.preventDefault();

      if (!preLoaderModal_Loading || !preLoaderModal_Success) {
        throw new Error(
          `modal error: modal(s) not found, Style could not be assigned`
        );
      }
      // show the above in a modal for real world builds

      preLoaderModal_Loading.style.display = 'block';

      if (
        !updateProfileFullName ||
        !updateProfileFormEmail ||
        !updateProfileFormAbout ||
        !updateProfileFormWebsite
      ) {
        throw new Error(
          'form input error: form input(s) could not be found.'
          // display this in a modal for real world builds
        );
      }

      const updateToProfile = {
        name: updateProfileFullName.value,
        email: updateProfileFormEmail.value,
        about: updateProfileFormAbout.value,
        website: updateProfileFormWebsite.value,
      };

      const { data: updatedProfile } = await axios.patch<{
        profile: ProfileSpecs;
        responseMessage: string;
      }>(
        `https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/update-profile/${id}`,
        updateToProfile
      );

      if (
        updatedProfile &&
        updatedProfile.responseMessage === 'profile updated successfully' // resolve this
      ) {
        preLoaderModal_Loading.style.display = 'none';
        preLoaderModal_Success.style.display = 'block';

        updateProfileFullName.value = '';
        updateProfileFormEmail.value = '';
        updateProfileFormAbout.value = '';
        updateProfileFormWebsite.value = '';

        setTimeout(() => {
          preLoaderModal_Success.style.display = 'none';

          window.location.href = '../index.html';
        }, 2000);
      }
    } catch (error) {
      error instanceof Error
        ? console.log(error.message)
        : console.log(`Error: unknown error`);

      // show error message in modal/pop-up for real-world builds.
    }
  }

  updateProfileForm.addEventListener('submit', handleUpdateProfile);
} catch (error) {
  error instanceof Error
    ? console.log(error.message)
    : console.log(`Error: unknown error`);

  // show error message in modal/pop-up for real-world builds.
}
