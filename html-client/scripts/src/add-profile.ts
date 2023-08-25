import axios from 'axios';

const addProfileFormFullName = document.getElementById(
  'fullName'
) as HTMLInputElement | null;
const addProfileFormEmail = document.getElementById(
  'email'
) as HTMLInputElement | null;
const addProfileFormAbout = document.getElementById(
  'about'
) as HTMLInputElement | null;
const addProfileFormWebsite = document.getElementById(
  'website'
) as HTMLInputElement | null;
const addProfileForm: HTMLFormElement | null =
  document.querySelector('.add-profile-form');
const addProfilePreLoaderModal_Loading: HTMLElement | null =
  document.querySelector('.pre-loader-modal_loading');
const addProfilePreLoaderModal_Success = document.querySelector(
  '.pre-loader-modal_success'
);

try {
  if (!addProfileForm) {
    throw new Error(
      `form error: form is not defined. form is ${addProfileForm}`
    );
    // display this in a modal for real world builds
  }

  addProfileForm.addEventListener('submit', handleAddProfile);
} catch (error) {
  error instanceof Error
    ? console.log(error.message)
    : console.log(`Error: unknown error`);

  // show error message in modal/pop-up for real-world builds.
}

async function handleAddProfile(e: SubmitEvent) {
  try {
    e.preventDefault();

    function queryModal(
      modalType: HTMLElement | null,
      modalVisibility: string
    ) {
      if (!modalType) {
        throw new Error(
          `modal error: modal not found. display = "${modalVisibility}" could not be set to ${modalType}. Check if profile was successfully created. 
              (display this in a modal for real world builds. Add a constant note like "Please report this error in every modal")`
        );
      }

      modalType.style.display = `${modalVisibility}`;
    }

    if (
      !addProfileFormAbout ||
      !addProfileFormEmail ||
      !addProfileFormFullName ||
      !addProfileFormWebsite
    ) {
      throw new Error(
        'form input error: form input(s) could not be found'
        // display this in a modal for real world builds
      );
    }

    addProfilePreLoaderModal_Loading &&
      queryModal(addProfilePreLoaderModal_Loading, 'block');

    // if (!addProfileForm) {
    //   console.log('form error: display this in a modal for real world builds');
    //   return;
    // } - this will be an over-do because the form won't even be able to execute the function if this statement if true - DON'T OVER-DO DEFENSIVE PROGRAMMING.

    if (
      !addProfileFormAbout ||
      !addProfileFormEmail ||
      !addProfileFormFullName ||
      !addProfileFormWebsite
    ) {
      throw new Error(
        'user input error: Check if profile was successfully created. '
        // display this in a modal for real world builds
      );
    }

    /* the advantages of having these bit sized form errors include precise debugging, and(hence) saving of time amongst others like
      having robust and reliable systems/software... */

    const profile = {
      fullName: addProfileFormFullName.value,
      email: addProfileFormEmail.value,
      website: addProfileFormWebsite.value,
      about: addProfileFormAbout.value,
    };

    const { data } = await axios.post<{
      newProfile: ProfileSpecs;
      responseMessage: string;
    }>(
      'https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/create-profile',
      profile
    );

    const profileData = data;
    if (
      profileData &&
      profileData.responseMessage === 'profile created successfully'
    ) {
      queryModal(addProfilePreLoaderModal_Loading as HTMLElement, 'none');
      queryModal(addProfilePreLoaderModal_Success as HTMLElement, 'block');

      addProfileFormFullName.value = '';
      addProfileFormEmail.value = '';
      addProfileFormAbout.value = '';
      addProfileFormWebsite.value = '';

      // setTimeout(() => {
      //   queryModal(addProfilePreLoaderModal_Success as HTMLElement, 'none');

      //   window.location.href = '../index.html';
      // }, 2000);
    }
  } catch (error) {
    error instanceof Error
      ? console.log(error.message)
      : console.log(`Error: unknown error`);

    // show error message in modal/pop-up for real-world builds.
  }
}
