'use client'; // Error components must be Client Components

import { useEffect } from 'react';

function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen bg-blue-50 pt-40 text-center text-gray-400 text-[20px] mx-auto'>
          <p className='mb-12'>
            An Error occurred because something went wrong! <br /> <br />
            Below is a description of the error: <br />
            <br />
            <div className='w-[80%] mx-auto'>
              {error instanceof Error ? error.message : error}
            </div>
          </p>
          <button className='text-blue-500 underline' onClick={() => reset()}>
            Please try again
          </button>
        </div>
      </body>
    </html>
  );
}

export default GlobalError;
