import React, { useEffect, useState } from 'react'
import { useState as usestate } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import style from '../../styles/styles';
import {RxAvatar} from "react-icons/rx"
import axios from 'axios';
import server from '../../server';
import { toast } from 'react-toastify';



export const Signup = () => {
  const navigate = useNavigate()
  const [Name,setName] = usestate("");
    const [email,setEmail] = usestate("");
   const [visible,setVisible] = useState(!true)
   const [password,setPassword] = usestate(null)
   const [C_password, setC_password] = useState("")
   const [C_visible,setC_visible] = useState(false)
   const [matched,setmatched] = useState("")
   const [avatar,setAvatar] = useState("")
   const [existence, setExistence] = useState("")

   const handleSubmit=(e)=>{
    e.preventDefault()
    const newform =  new FormData()
    const config = {header:{"Content-Type":"multipart/form-data"}}
      newform.append("file",avatar);
       newform.append("Name",Name);
       newform.append("email",email);
       newform.append("password",password);
      axios.post(`${server}/user/create-user`,newform,config).then((res)=>{
            if(res.data.success){
              navigate("/login")
              toast.success("Mail sent successfully")
              alert(res.data.message)

            }
        console.log(res)
      }).catch((err)=>{
           console.log(err.response.data,"this is the error")
        toast.error(err.response.data.message)
      })
   }

const handleFileInputChange=(e)=>{
 
  const file = e.target.files[0];
  console.log(file)
  setAvatar(file);
}
   

   useEffect(()=>{
          
    if(password === C_password){
        setmatched(true)
    }else{
        setmatched(false)
    }
   },[C_password,password])
  return (
    

<div className=' bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
<div className='sm:mx-auto sm:w-full sm:max-w-md'>
          
          <h2 className='mt-4 text-center text-3xl font-extrabold text-gray-900'>
            Signup to your account
          </h2>
        </div>
             
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form className='space-y-6'>
                  <div className='text-red-500'>{existence}</div>
                <label htmlFor='text' className='block text-sm font-medium text-gray-700'>
                        Name
                    </label> 
                    <div className='mt-1'>
                    <input
                  type="text"
                  name="text"
                  autoComplete="email"
                  required
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                /></div>
                  
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
                    <label htmlFor='c_password' className='block text-sm font-medium text-gray-700'>
                     Confirm Password
                    </label> 
                    <div className='mt-1 relative'>
                    <input
                  type={C_visible?"text":"password"}
                  name="c_password"
                  autoComplete="email"
                  required
                   
                  value= {C_password}

                  onChange={(e) => {
                    setC_password(e.target.value)
                   
                   
                }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                  
                  {
                    C_visible?<AiOutlineEyeInvisible className="absolute right-2 top-2 cursor-pointer" size={25} onClick={(e)=>{ setC_visible(!C_visible)}}></AiOutlineEyeInvisible >:<AiOutlineEye className='absolute right-2 top-2 cursor-pointer'size={25}  onClick={(e)=>{ setC_visible(!C_visible)}}></AiOutlineEye>
                  }
                     {C_password? matched?<div className='text-green-600 absolute top-9 text-sm font-bold'>Password_Matched</div>:<div className='text-red-600 top-9 text-sm font-bold absolute'> Not matched</div>:<div></div>}
                    
                    </div>
                   <div className={`${style.noramlFlex} justify-between `  }>
                    <div className={`${style.noramlFlex}`}>
                       
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
                    <label htmlFor='avatar' className='block text-sm font-medium text-gray-700'>

                    </label>
                    <div className='mt-2 flex items-center '>
                      <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                        {
                           avatar?<img src={URL.createObjectURL(avatar)} alt="avatar" className='inline-block h-8 w-8 rounded-full overflow-hidden'></img> : <RxAvatar  className='inline-block h-8 w-8 rounded-full overflow-hidden'></RxAvatar>
                        }
                      </span>
                      <label htmlFor='file-input' className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                        Uplaod a file
                        <input type='file' name='avatar' id="file-input" accept='.jpg,.jpeg,.png' hidden onChange={handleFileInputChange}></input>
                      </label>
                    </div>

                   </div>
                   <div>
                   <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border-transparent text-white text-sm font-medium round bg-blue-600  hover:bg-blue-700 ' onClick={handleSubmit}>
                        Submit
                    </button>
                   </div>
                  <div className={`${style.normalFlex} w-full `}>
                    <h4> Already have an Account ?</h4>
                    <Link to = "/Login " className="text-blue-600">
                        Login
                    </Link>
                  </div>
                </form>
            </div>
        </div>
       
        
    </div>
    
  )
}
