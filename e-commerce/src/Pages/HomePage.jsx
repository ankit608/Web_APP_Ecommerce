import React, { useState } from 'react'
import Header from "../Components/Layout/Header.jsx"
import Hero from "../Components/Layout/Hero.jsx"
import Categories from "../Components/Route/Categories/Categories.jsx"
import BestDeals from "../Components/Route/BestDeals/BestDeals.jsx"
const HomePage = () => {
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

    </div>
  )
}

export default HomePage