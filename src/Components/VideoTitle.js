import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button id="globalButton" className="bg-white text-black py-4 px-10 w-auto text-xl rounded-lg bg-opacity-90 font-bold hover:bg-opacity-50">
          <span className="text-black">▶</span> Play
        </button>
        <button id="globalButton" className="mx-2 bg-slate-600 text-white  py-4 px-12 w-auto text-xl rounded-lg bg-opacity-50 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
