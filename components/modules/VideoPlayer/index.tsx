import React from "react";
import ReactPlayer from "react-player/youtube";

export const VideoPlayer = () => {
  return (
    <>
        <div className="p-[20px] sm:p-[100px] relative">
            <ReactPlayer
                width='100%'
                controls = {true}
                className='react-player fixed-bottom'
                url='https://youtu.be/s3ktYTdV6gw'
            />
        </div>
    </>
  );
};
