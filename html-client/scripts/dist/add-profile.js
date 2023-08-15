"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateFormFullName = document.getElementById('fullName');
const updateFormEmail = document.getElementById('email');
const updateFormAbout = document.getElementById('about');
const updateFormWebsite = document.getElementById('website');
const updateProfileForm = document.querySelector('.add-profile-form');
const UpdateProfilePreLoaderModal_Loading = document.querySelector('.pre-loader-modal_loading');
const UpdateProfilePreLoaderModal_Success = document.querySelector('.pre-loader-modal_success');
function handleAddProfile(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        UpdateProfilePreLoaderModal_Loading &&
            (UpdateProfilePreLoaderModal_Loading.style.display = 'block');
        const profile = {
            fullName: updateFormFullName && updateFormFullName.value,
            email: updateFormEmail && updateFormEmail.value,
            about: updateFormAbout && updateFormAbout.value,
            website: updateFormWebsite && updateFormWebsite.value,
        };
        const newProfile = yield axios.post('https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/create-profile', profile);
        if (newProfile &&
            newProfile.data.responseMessage === 'profile created successfully') {
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
            }, 3000);
        }
    });
}
updateProfileForm &&
    updateProfileForm.addEventListener('submit', handleAddProfile);
