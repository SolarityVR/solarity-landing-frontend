import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  return (
    <>
        <div className="p-[20px] sm:p-[100px] relative">
            <ReactPlayer
                className='react-player fixed-bottom'
                url= 'demo.mp4'
                width='100%'
                height='100%'
                controls = {true}
            />
        </div>
    </>
  );
};
