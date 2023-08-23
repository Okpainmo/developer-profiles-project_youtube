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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const updateProfileFullName = document.getElementById('fullName');
const updateProfileFormEmail = document.getElementById('email');
const updateProfileFormAbout = document.getElementById('about');
const updateProfileFormWebsite = document.getElementById('website');
const updateProfileForm = document.querySelector('.update-profile-form');
const preLoaderModal_Loading = document.getElementById('preLoaderModal_Loading');
const preLoaderModal_Success = document.getElementById('preLoaderModal_Success');
const urlParams = window.location.search;
const id = new URLSearchParams(urlParams).get('id');
// console.log(id);
try {
    if (!updateProfileFullName ||
        !updateProfileFormEmail ||
        !updateProfileFormAbout ||
        !updateProfileFormWebsite) {
        throw new Error('form input error: form input(s) could not be found'
        // display this in a modal for real world builds
        );
    }
    if (!updateProfileForm) {
        throw new Error(`form error: form is not defined. form is ${updateProfileForm}`);
        // display this in a modal for real world builds
    }
    const handleFetchProfileToUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        const updateProfileUrl = `https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/get-profile/${id}`;
        try {
            const response = yield fetch(updateProfileUrl);
            const fetchedData = yield response.json();
            console.log(fetchedData);
            if (fetchedData &&
                fetchedData.responseMessage === 'profile fetched successfully') {
                updateProfileFullName.value = fetchedData.profile.fullName;
                updateProfileFormEmail.value = fetchedData.profile.email;
                updateProfileFormAbout.value = fetchedData.profile.about;
                updateProfileFormWebsite.value = fetchedData.profile.website;
            }
            else {
                throw new Error('request unsuccessful: developer profile could not be fetched'
                // display this in a modal for real world builds
                );
            }
        }
        catch (error) {
            error instanceof Error
                ? console.log(error.message)
                : console.log(`Error: unknown error`);
            // show error message in modal/pop-up for real-world builds.
        }
    });
    handleFetchProfileToUpdate();
    function handleUpdateProfile(e) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                e.preventDefault();
                if (!preLoaderModal_Loading || !preLoaderModal_Success) {
                    throw new Error(`modal error: modal(s) not found, Style could not be assigned`);
                }
                // show the above in a modal for real world builds
                preLoaderModal_Loading.style.display = 'block';
                if (!updateProfileFullName ||
                    !updateProfileFormEmail ||
                    !updateProfileFormAbout ||
                    !updateProfileFormWebsite) {
                    throw new Error('form input error: form input(s) could not be found.'
                    // display this in a modal for real world builds
                    );
                }
                const updateToProfile = {
                    name: updateProfileFullName.value,
                    email: updateProfileFormEmail.value,
                    about: updateProfileFormAbout.value,
                    website: updateProfileFormWebsite.value,
                };
                const { data: updatedProfile } = yield axios_1.default.patch(`https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/update-profile/${id}`, updateToProfile);
                if (updatedProfile &&
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
            }
            catch (error) {
                error instanceof Error
                    ? console.log(error.message)
                    : console.log(`Error: unknown error`);
                // show error message in modal/pop-up for real-world builds.
            }
        });
    }
    updateProfileForm.addEventListener('submit', handleUpdateProfile);
}
catch (error) {
    error instanceof Error
        ? console.log(error.message)
        : console.log(`Error: unknown error`);
    // show error message in modal/pop-up for real-world builds.
}
