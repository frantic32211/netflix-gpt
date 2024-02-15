import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="mt-14 p-4 pb-6 mx-6 mb-4 bg-black text-white opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
