import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="">
        <h1>{title}</h1>
        <div className="">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
