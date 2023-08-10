// import React from 'react';

function ModalOverlay(props) {
  // console.log(props);
  // console.log(props.handleHideModal);
  // console.log(props.showModal);

  const { showModal, handleHideModal } = props;

  return (
    <section
      id='modalOverlay'
      className={`px-3 fixed left-0 right-0 top-0 min-h-screen ${
        showModal ? 'flex' : 'hidden'
      } w-full justify-center items-center`}
      style={{ backgroundColor: 'rgba(22, 21, 21, 0.8)' }}
      //   style='background-color: rgba(22, 21, 21, 0.8)'
    >
      <div className='confirm-process-modal bg-white p-6 rounded w-full sm:w-[400px] sm:mx-auto'>
        <h3 className='text-lg leading-6 text-gray-900 poppins font-bold'>
          Delete an developer profile.
        </h3>
        <p className='mt-4 text-sm text-gray-500'>
          You are about to delete a developer profile. Are you sure you want to
          continue?
        </p>
        <div className='mt-6 flex gap-3' id='cancelDeleteProfileButton'>
          <button
            type='button'
            onClick={handleHideModal}
            className='poppins inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          >
            No, thanks!
          </button>
          <button
            type='button'
            // onClick={() => {
            //   handleDeleteProfile(id);
            // }}
            id='confirmDeleteProfileButton'
            className='poppins inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            Yes delete.
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModalOverlay;
