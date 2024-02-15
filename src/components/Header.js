import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchPage } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearchCLick = () => {
    dispatch(toggleGptSearchPage());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="px-3 my-4 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 my-4 mx-6 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900"
            onClick={handleGptSearchCLick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <div className="flex flex-col mt-2">
            <img
              className="px-4 w-16 h-8"
              src={user?.photoURL}
              alt="profile-logo"
            />
            <button
              className="text-lg font-bold text-white hover:text-neutral-400"
              onClick={handleSignOut}
            >
              Signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
