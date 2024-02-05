import { useSelector } from "react-redux";
import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
