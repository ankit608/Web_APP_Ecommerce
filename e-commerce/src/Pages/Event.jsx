import React, { useState } from 'react'
import EventCard from '../Components/Route/Events/EventCard'
import Header from '../Components/Layout/Header'
const Event = () => {
    const [option,setOption] =  useState(1);
    console.log(option,"option")
    const optionHandler=(a) =>{
          
             setOption(a);
    }
    return (
        <>
         <Header activeHeading={option} setOption = {optionHandler}></Header>
          <EventCard active = {true}></EventCard>
        </>
    
  )
}

export default Event