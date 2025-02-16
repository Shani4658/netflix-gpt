import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_ICON,
} from "../Utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
import NetflixLogo from "../StreamFlix2.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store?.gpt?.showGptSearch);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const languageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex px-8  flex-col  md:justify-between md:absolute md:w-screen  md:z-50  md:flex-row    ">

      <img className="w-44 flex m-auto md:mx-0 shadow-2xl" src={NetflixLogo} alt="Logo"></img>
      {user && (
        <div className="flex gap-2 items-center  justify-between sm:justify-center md:justify-end">
          {
            showGPTSearch && (
            <select className="text-white bg-black bg-opacity-60 border-2 border-slate-400 p-1 rounded-lg font-semibold px-1 hover:bg-white hover:text-black" onChange={languageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifiers} value={lang.identifiers}>
                  {lang.name}
                </option>
              ))}
            </select>

            )
          }
          <button
            id="globalButton"
            className="text-sm text-white bg-black bg-opacity-60 border-2 border-slate-400 p-2 rounded-lg font-semibold min-w-fit  hover:bg-white hover:text-black"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? "Home Page" : "GPTSearch"}
          </button>
          <div className="flex gap-2 items-center translate-x-7 sm:translate-x-2">
            <img
              className="h-9 w-auto rounded-lg"
              src={user?.photoURL || USER_ICON}
              alt="User-Icon"
            ></img>
            <button id="globalButton" className="font-bold sm:text-white hover:text-blue-700 " onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Header;
