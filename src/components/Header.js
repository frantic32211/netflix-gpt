import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex flex-col mt-2">
          <img
            className="px-4 w-16 h-8"
            src={user?.photoURL}
            alt="profile-logo"
          />
          <button className="text-lg font-bold" onClick={handleSignOut}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
