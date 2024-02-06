import GptSearchCard from "./GptSearchCard";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { NETFLIX_BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute h-screen w-screen -z-10">
        <img className="h-screen w-screen" src={NETFLIX_BG_IMG} alt="bg-logo" />
      </div>
      <GptSearchCard />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
