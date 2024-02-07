import { useSelector } from "react-redux";
import lang from "../utils/multiLanguage";

const GptSearchCard = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <div className="w-1/2">
        <form className="w-full bg-black bg-opacity-80">
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceHolder}
            className="py-2 px-2 my-6 mx-5 w-2/3 font-semibold rounded-sm"
          />
          <button className="py-2 px-6 my-6 mx-5 w-40 bg-[#e50914] rounded-lg text-white font-semibold hover:bg-red-700">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchCard;
