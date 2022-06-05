import React from "react";
import ReactPlayer from "react-player/lazy";

export const VideoPlayer = () => {
  return (
    <>
        <div className="p-[20px] sm:p-[100px] relative">
            <ReactPlayer
                controls = {true}
                className='react-player fixed-bottom'
                width="100%"
                height="100%"
                url='/demo.mp4'
            />
        </div>
    </>
  );
};
