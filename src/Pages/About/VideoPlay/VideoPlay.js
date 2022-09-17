import React from "react";
import './VideoPlay.css'

const VideoPlay = () => {
  return (
    <>
      <section className="video-play">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/xi1CKzeA01c? 
                            autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
      </section>
    </>
  );
};

export default VideoPlay;
