import React from "react";
import ReactPlayer from "react-player/youtube";

export const VideoPlayer = () => {
  return (
    <>
        <div className="p-[20px] sm:p-[100px] relative">
            <ReactPlayer
                controls = {true}
                className='react-player fixed-bottom'
                url='https://solarity-frontend.vercel.app/iframe/joinModal/plaza'
            />
        </div>
    </>
  );
};
