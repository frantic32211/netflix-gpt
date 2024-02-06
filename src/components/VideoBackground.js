import { useSelector } from "react-redux";
import useTrailerVideo from "../custom hooks/useTrailerVideo";
import { YOUTUBE_URL_1, YOUTUBE_URL_2 } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          YOUTUBE_URL_1 + trailerVideo?.key + YOUTUBE_URL_2 + trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
