import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
