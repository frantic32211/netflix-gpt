import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    if (name.current) {
      // signup page

      if (name.current.value == "") {
        var message = "Please enter Full Name";
        setErrorMessage(message);
        return;
      }
      var message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setErrorMessage(message);
    } else {
      // sign in page

      var message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
    }

    if (message) return;

    if (!isSignInForm) {
      // Sign in/Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png",
          })
            .then(() => {
              // Profile update
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " -:- " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -:- " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -:- " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute h-screen w-screen">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-zinc-700 rounded-md outline-none hover:bg-zinc-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="p-4 my-2 w-full bg-zinc-700 rounded-md outline-none hover:bg-zinc-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-zinc-700 rounded-md outline-none hover:bg-zinc-600"
        />
        <p className="text-red-500 font-semibold py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-[#e50914] w-full rounded-lg font-semibold hover:bg-red-700"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        {isSignInForm ? (
          <div>
            <p className="mt-4 text-neutral-500 inline-block">
              New to Netflix? &nbsp;
            </p>
            <p
              className="mt-4 inline-block cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign Up Now
            </p>
          </div>
        ) : (
          <div>
            <p className="mt-4 text-neutral-500 inline-block">
              Already registered? &nbsp;
            </p>
            <p
              className="mt-4 inline-block cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign In Now
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
