import React, { useContext, useEffect } from 'react'
import { Login } from '../Components/Login/Login.jsx'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../context.js/contextApi.js';

export const LoginPage = () => {
   const navigate = useNavigate();
     const {state}  = useContext(UserData);
  useEffect(()=>{
    if(state.Authenticated===true){
      navigate("/")
    }
   
  })
  return (
    <div className='w-full h-screen bg-gray-50'>
         <Login></Login>
    </div>
  )
}
