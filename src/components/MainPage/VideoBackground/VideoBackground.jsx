import React from "react";
import style from "./VideoBackground.module.css";
import mainVideo from "../../../video/main-video.mp4";

function VideoBackground() {
  return (
    <div className={style["video-background"]}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={style["mainPage-video"]}
      >
        <source src={mainVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
