import React from "react";
import { auth } from "../Utils/firebase";
import { USER_ICON } from "../Utils/constant";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex md:justify-between md:absolute md:w-screen px-8 pt-2 md:bg-gradient-to-b md:from-black md:z-50">
      <div className="w-28 md:w-44 shadow-2xl relative">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        ></img>
      </div>
      {user && (
        <div className="flex gap-2 items-center">
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
