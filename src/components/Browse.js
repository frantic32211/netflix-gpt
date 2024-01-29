import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return <div>Browse</div>;
};

export default Browse;
