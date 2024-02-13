import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openAi";
import {addGptMovieResult} from "../utils/GptSlice";

const useGptSearchMovies = (searchText) => {
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies/web-series for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies/web-series, comma separated, like the the example result given ahead. Example : Don, Talaash, Race, Dhoom, Kuch Kuch Hota Hai";

    // Make an API Call to GPT API
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // DummyResult = Andaz Apna Apna, Hera Pheri, Golmaal: Fun Unlimited, 3 Idiots, Fukrey

    // Split the array of movies = ['Andaz Apna Apna', 'Hera Pheri', 'Golmaal: Fun Unlimited', '3 Idiots', 'Fukrey']

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    // For each movie, search on TMDB API

    const movieData = gptMovies.map((movie) => searchMovieTmdb(movie));

    // movieData will return array of 5 Promises (unresolved), because of async functionality of searchMovieTmdb

    const TmdbResults = await Promise.all(movieData);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResult: TmdbResults })
    );
  };

  return handleGptSearchClick;
};

export default useGptSearchMovies;
