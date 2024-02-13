import { useSelector } from "react-redux";
import useGptSearchMovies from "../custom hooks/useGptSearchMovies";
import lang from "../utils/multiLanguage";
import { useRef } from "react";

const GptSearchCard = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = useGptSearchMovies(searchText);

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
