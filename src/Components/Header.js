import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { NETFLIX_LOGO, USER_ICON } from "../Utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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

    return ()=> unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="flex md:justify-between md:absolute md:w-screen px-8 md:bg-gradient-to-b md:from-black md:z-50">
      <div className="w-28 md:w-44 shadow-2xl relative">
        <img
          src={NETFLIX_LOGO}
          alt="Logo"
        ></img>
      </div>
      {user && (
        <div className="flex gap-2 items-center">
          <button className="m-2 p-2 bg-slate-500 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold rounded-lg shadow-lg" onClick={handleGptSearchClick}>GPT Search</button>
          <img
            className="h-10 w-auto rounded-lg"
            src={user?.photoURL || USER_ICON}
            alt="User-Icon"
          ></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
