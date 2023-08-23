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
const addProfileFormFullName = document.getElementById('fullName');
const addProfileFormEmail = document.getElementById('email');
const addProfileFormAbout = document.getElementById('about');
const addProfileFormWebsite = document.getElementById('website');
const addProfileForm = document.querySelector('.add-profile-form');
const addProfilePreLoaderModal_Loading = document.querySelector('.pre-loader-modal_loading');
const addProfilePreLoaderModal_Success = document.querySelector('.pre-loader-modal_success');
try {
    if (!addProfileForm) {
        throw new Error(`form error: form is not defined. form is ${addProfileForm}`);
        // display this in a modal for real world builds
    }
    addProfileForm.addEventListener('submit', handleAddProfile);
}
catch (error) {
    error instanceof Error
        ? console.log(error.message)
        : console.log(`Error: unknown error`);
    // show error message in modal/pop-up for real-world builds.
}
function handleAddProfile(e) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            e.preventDefault();
            function queryModal(modalType, modalVisibility) {
                if (!modalType) {
                    throw new Error(`modal error: modal not found. display = "${modalVisibility}" could not be set to ${modalType}. Check if profile was successfully created.
              (display this in a modal for real world builds)`);
                }
                modalType.style.display = `${modalVisibility}`;
            }
            if (!addProfileFormAbout ||
                !addProfileFormEmail ||
                !addProfileFormFullName ||
                !addProfileFormWebsite) {
                throw new Error('form input error: form input(s) could not be found'
                // display this in a modal for real world builds
                );
            }
            queryModal(addProfilePreLoaderModal_Loading, 'block');
            // if (!addProfileForm) {
            //   console.log('form error: display this in a modal for real world builds');
            //   return;
            // } - this will be an over-do because the form won't even be able to execute the function if this statement if true - DON'T OVER-DO DEFENSIVE PROGRAMMING.
            if (!addProfileFormAbout ||
                !addProfileFormEmail ||
                !addProfileFormFullName ||
                !addProfileFormWebsite) {
                throw new Error('user input error: Check if profile was successfully created. '
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
            const { data } = yield axios_1.default.post('https://developer-profiles-project-youtube.onrender.com/api/v1/profiles/create-profile', profile);
            const profileData = data;
            if (profileData &&
                profileData.responseMessage === 'profile created successfully') {
                queryModal(addProfilePreLoaderModal_Loading, 'none');
                queryModal(addProfilePreLoaderModal_Success, 'block');
                addProfileFormFullName.value = '';
                addProfileFormEmail.value = '';
                addProfileFormAbout.value = '';
                addProfileFormWebsite.value = '';
                // setTimeout(() => {
                //   queryModal(addProfilePreLoaderModal_Success as HTMLElement, 'none');
                //   window.location.href = '../index.html';
                // }, 2000);
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
