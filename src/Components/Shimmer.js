import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
      <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
      <div className="bg-gray-300 h-6 w-full rounded"></div>
      <div className="bg-gray-300 h-6 w-5/6 rounded"></div>
    </div>
  );
};

export default Shimmer;