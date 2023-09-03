'use client';

import React from 'react';

function PopUpsWrapper({ showLoadingModal, showSuccessModal, requestType }) {
  return (
    <section className='pop-ups-wrapper relative'>
      {/* 1. pre-loader modal - loading  */}

      <div
        className={`pre-loader-modal_loading text-center mb-[30px] absolute top-0 w-[350px]  sm:w-[500px] left-0 right-0 mx-auto ${
          showLoadingModal ? 'block' : 'hidden'
        }`}
      >
        <p className='mt-4 text-sm px-4 py-3 font-semi-bold w-full bg-blue-50 text-blue-700'>
          {requestType === 'create'
            ? 'Your profile is being created please wait...'
            : 'Your profile is being updated please wait...'}
        </p>
      </div>

      {/* 2. pre-loader modal - success */}

      <div
        className={`pre-loader-modal_success text-center mb-[30px] absolute top-0 w-[350px] sm:w-[500px] left-0 right-0 mx-auto ${
          showSuccessModal ? 'block' : 'hidden'
        }`}
      >
        <p className='mt-4 text-sm px-4 py-3 font-semi-bold w-full bg-green-50 text-green-700'>
          {requestType === 'create'
            ? 'Profile created successfully.'
            : 'Profile updated successfully.'}{' '}
        </p>
      </div>
    </section>
  );
}

export default PopUpsWrapper;
