import { useRef, useState } from "react";
import VideoBrandInfo from "../../video/main-video.mp4";
import ButtonPlay from "../../image/buttons/ButtonPlay.svg";
import style from "./BrandInfoVideo.module.css";

function BrandInfoVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className={style["brandInfo-video__wrapper"]}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={style["brandInfo-video"]}
        onClick={handlePlayPause}
      >
        <source src={VideoBrandInfo} type="video/mp4" />
      </video>

      {!isPlaying && (
        <button className={style["button-play"]} onClick={handlePlayPause}>
          <img src={ButtonPlay} alt="ButtonPlay" />
        </button>
      )}
    </div>
  );
}

export default BrandInfoVideo;
