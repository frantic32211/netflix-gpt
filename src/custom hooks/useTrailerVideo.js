import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/572802/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    // Check for videoType Trailer
    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );

    // Condition if more than one video is available OR no videoType Trailer is available
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useTrailerVideo;
