import lang from "../utils/multiLanguage";

const GptSearchCard = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black">
        <input
          type="text"
          placeholder={lang.en.gptSearchPlaceHolder}
          className="py-2 px-4 my-6 mx-4 w-3/4 font-semibold rounded-sm"
        />
        <button className="py-2 px-7 my-6 mx-4 w-auto bg-[#e50914] rounded-lg text-white font-semibold hover:bg-red-700">
          {lang.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchCard;
