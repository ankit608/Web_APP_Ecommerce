import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductCard from '../Components/Route/ProductCard/ProductCard';
import { productData } from '../static/static';
import Header from '../Components/Layout/Header';
import style from '../styles/styles';
const BestSellingPage = () => {
    const [option,setOption] = useState(1);
    console.log(option,"option")
    const optionHandler=(a) =>{
          
             setOption(a);
    }
    const [data,setData] = useState([])
    useEffect(()=>{
        const d = productData && productData.sort((a,b)=> b.total_sell - a.total_sell);
        setData(d)

        
    })
  return (
    <div>
    <Header activeHeading={option} setOption = {optionHandler}></Header>
    <br></br>
    <div className={`${style.section}`}>
<div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12'>
{
    data.map((i,index)=><ProductCard data={i} key={index}></ProductCard>)
   }
   
</div>
{
      data && data.length === 0 ? <h6 className='text-center w-full pb-[110px] text-[20px]'> No product found!!</h6>:null
    }
    </div>
</div>
  )
}

export default BestSellingPage