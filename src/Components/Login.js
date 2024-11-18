import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { NETFLIX_BG, USER_ICON } from "../Utils/constant";

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  // using useRef Hook in React
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    
    
    
    const msg = checkValidate(email.current.value, password.current.value);
    
    setErrorMessage(msg);
    if (msg) return;

    if (!isSignInForm) {
      // SignUp Logic
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
            photoURL: {USER_ICON},
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
           
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <div className="absolute z-50 ">
        <Header />
      </div>
      <div className="absolute">
        <img
          className="object-cover h-screen md:w-screen"
          src={NETFLIX_BG}
          alt="bg-img loading"
        ></img>
      </div>

      <div className="md:flex md:justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-20 border border-black bg-black opacity-90 w-screen absolute items-center flex flex-col md:w-1/3 md:justify-center rounded-lg"
        >
          <h1 className="text-white font-semi-bold text-3xl mt-12 mb-4 px-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="User Name"
              className="relative p-4 mx-4 w-2/3 text-white font-semibold rounded-lg bg-gray-600 placeholder:text-white "
            ></input>
          )}
          <input
            ref={email}
            type="email"
            placeholder="email address"
            className="relative p-4 m-4 w-2/3 text-white font-semibold  rounded-lg bg-gray-600 placeholder:text-white "
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="relative p-4 m-4 w-2/3 text-white font-semibold  rounded-lg  bg-gray-600 placeholder:text-white "
          ></input>
          <p className="relative w-2/3 text-red-600 mx-4">{errorMessage}</p>
          <button
            className="relative p-4 m-4 w-2/3 text-white rounded-lg hover:bg-red-700 bg-orange-600 "
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center mb-10">
            <input
              type="checkbox"
              className="w-6 h-6 mx-4 mt-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
            ></input>
            <p className="mt-2 text-white">Remember me</p>
          </div>
          <p className="cursor-pointer text-white" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix ? " : "Already Registered ! "}
            <span
              className="text-white text-2xl   underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
          <p className="text-white text-sm w-full px-4 my-10">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot .
            <a href="" className="hover:text-blue-800 text-blue-500">
              Learn More
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
