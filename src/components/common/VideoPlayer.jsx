import { useVideoPlayer } from "@/hooks/useVideoPlayer";
const VideoPlayer = ({ url }) => {
  const { videoRef, playing, play, pause } = useVideoPlayer();

  return (
    <div className="relative border-2 h-full border-gray-300 rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-contain"
        controls={playing}
        onEnded={pause}
        onPause={pause}
      >
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <button
          onClick={play}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[70px] bg-green-500 rounded-full flex items-center justify-center border-none cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
