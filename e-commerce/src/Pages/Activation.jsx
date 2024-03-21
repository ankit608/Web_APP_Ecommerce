import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import server from '../server'
import axios from 'axios'

const Activation = () => {
 

    const Activation_Token = useParams()
    console.log(Activation_Token,"params");
    const [Err,setErr] =  useState(false)
    const [message,setmessage] = useState(null)
  

    useEffect(()=>{
        const activationEmail = async() =>{
            try{
                const res = await axios.post(`${server}/user/activation`, {token:Activation_Token.url})
                console.log(res.data);
               
                setmessage(res.data)
            }catch(error){
              console.log(error.response.data.message);
              
              setErr(true);
              setmessage(error.response.data.message)
            }
        }

         activationEmail();

    },[Activation_Token]);
  return (
    <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
  
        {
            Err?(<p>{message}</p>): (<p>your account has been created successfully</p>)
          
        }
    </div>
  )
}

export default Activation