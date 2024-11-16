import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { addUser, removeUser } from '../Utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login />,
    },
    {
        path:"/Browse",
        element:<Browse />,
    },
  ]); 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Signed In
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,email:email,displayName:displayName,photoURL:photoURL
        }));
        
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

  },[]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body