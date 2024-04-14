import React, { useContext, useEffect, useState } from 'react'
import Header from "../Components/Layout/Header.jsx"
import Hero from "../Components/Layout/Hero.jsx"
import Categories from "../Components/Route/Categories/Categories.jsx"
import BestDeals from "../Components/Route/BestDeals/BestDeals.jsx"
import FeaturedProduct from "../Components/Route/FeaturedProduct/FeaturedProduct.jsx"
import Events from "../Components/Route/Events/Events.jsx"
import Sponsered from "../Components/Route/Sponsered/Sponsered.jsx"
import {Footer} from "../Components/Layout/Footer.jsx"
import { UserData } from '../context.js/contextApi.js'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
     const navigate =  useNavigate()
     const {state} = useContext(UserData)

   

        const [option,setOption] = useState(1);
    console.log(option,"option")
    const optionHandler=(a) =>{
          
             setOption(a);
    }
  return (
    <div>
        <Header activeHeading={option} setOption = {optionHandler}></Header>
        <Hero></Hero>
        <Categories></Categories>
        <BestDeals></BestDeals>
        <Events></Events>
        <FeaturedProduct></FeaturedProduct>
          <Sponsered></Sponsered>  
          <Footer></Footer>  
          
             

    </div>
  )
}

/*useEffect(()=>{
  console.log(state)
 if(state.Authenticated===false) {
   console.log("hello....")
   navigate("/login")
 }
})*/
export default HomePage