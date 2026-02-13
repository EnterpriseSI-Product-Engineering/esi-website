import { useRef, useState } from "react";

export const useVideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const play = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const pause = () => {
    videoRef.current?.pause();
    setPlaying(false);
  };

  return {
    videoRef,
    playing,
    play,
    pause,
  };
};
