import React from 'react';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        {/* <strong className="font-bold">Search Movies </strong> */}
        <span className="block sm:inline"> Try searching for a movie to see results.</span>
      </div>
      {/* <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retry
        </button>
      </div> */}
    </div>
  );
};

export default Error;