import React, { useContext, useEffect, useState } from 'react'
import { useState as usestate } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import style from '../../styles/styles';
import axios from 'axios';
import { toast } from 'react-toastify';
import server from '../../server';
import { UserData } from '../../context.js/contextApi';
import { loadUser } from '../../Redux/actions.js/user';

export const Login = () => {
    const {dispatch,state} = useContext(UserData)
    const navigate = useNavigate()
   const [email,setEmail] = usestate(null);
   const [visible,setVisible] = useState(!true)
   const [password,setPassword] = usestate(null)

    useEffect(()=>{
      loadUser(dispatch);
      console.log(state);
    },[])
  
   
 const handelSubmit = async (e)=>{
    e.preventDefault();
    await axios.post(`${server}/user/login-user`,{
      email,
      password,

    },{withCredentials:true}).then((res)=>{
         
      toast.success("Login Successful")
       navigate("/")
       
    }).catch((err)=>{
        console.log(err,"error")
         toast.error(err.response.data.message)
                    
    })
 }

  return (
    <div className='h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            login to your account
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form className='space-y-6' onSubmit={handelSubmit}>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                        Email address
                    </label> 
                    <div className='mt-1'>
                    <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                    </div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                      Password
                    </label> 
                    <div className='mt-1 relative'>
                    <input
                  type={visible?"text":"password"}
                  name="password"
                  autoComplete="email"
                  required
                   
                  value= {password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                  
                  {
                    visible?<AiOutlineEyeInvisible className="absolute right-2 top-2 cursor-pointer" size={25} onClick={(e)=>{ setVisible(!visible)}}></AiOutlineEyeInvisible >:<AiOutlineEye className='absolute right-2 top-2 cursor-pointer'size={25}  onClick={(e)=>{ setVisible(!visible)}}></AiOutlineEye>
                  }
         
                    </div>
                   <div className={`${style.normalFlex} justify-between `  }>
                    <div className={`${style.normalFlex}`}>
                       
                        <input style={{ color: "rgb(37,99, 235)"}}type='checkbox' name="remember-me" id="remember-me" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"></input>
                          <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                            Remenber me
                          </label>
                    </div>
                    <div className='text-sm'>
                        <a href="a" className= "font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password ?
                        </a>
                    </div>
                    
                   </div>
                   <div>
                   <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border-transparent text-white text-sm font-medium round bg-blue-600  hover:bg-blue-700 '>
                        Submit
                    </button>
                   </div>
                  <div className={`${style.normalFlex} w-full `}>
                    <h4>Not have Account ?</h4>
                    <Link to = "/sign-up " className="text-blue-600">
                        Sign Up
                    </Link>
                  </div>
                </form>
            </div>
        </div>
       
        
    </div>

  )
}
