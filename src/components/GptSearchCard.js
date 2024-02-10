import { useSelector } from "react-redux";
import lang from "../utils/multiLanguage";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";

const GptSearchCard = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

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

    if (
      gptResults.choices?.[0]?.message?.content.match(/^(Sorry|Unfortunately)/g)
    )
      return (
        <div className="bg-black bg-opacity-80">
          <h1 className="p-4 text-white text-3xl font-semibold">
            No results found
          </h1>
        </div>
      );

    // DummyResult = Andaz Apna Apna, Hera Pheri, Golmaal: Fun Unlimited, 3 Idiots, Fukrey

    // Split the array of movies = ['Andaz Apna Apna', 'Hera Pheri', 'Golmaal: Fun Unlimited', '3 Idiots', 'Fukrey']

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    console.log(gptMovies);
    // For each movie, search on TMDB API

    const movieData = gptMovies.map((movie) => searchMovieTmdb(movie));

    // movieData will return array of 5 Promises (unresolved), because of async functionality of searchMovieTmdb

    const TmdbResults = await Promise.all(movieData);

    console.log(TmdbResults);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <div className="w-1/2">
        <form
          className="w-full bg-black bg-opacity-80"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptSearchPlaceHolder}
            className="py-2 px-2 my-6 mx-5 w-2/3 font-semibold rounded-sm"
          />
          <button
            className="py-2 px-6 my-6 mx-5 w-40 bg-[#e50914] rounded-lg text-white font-semibold hover:bg-red-700"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchCard;
