
import React, { useEffect, useState } from 'react'
import { productData } from '../../../static/static';
import style from '../../../styles/styles';
import ProductCard from "../ProductCard/ProductCard.jsx";

function BestDeals() {
  
    const [Data,setData] = useState([]);
    useEffect(()=>{
        const d = productData && productData.sort((a,b)=>b.total_sell-a.total_sell);
        const firstFive = d.slice(0,5);
        setData(firstFive);
        
    },[])
    return (
    <div className={`${style.section}`}>
        <div className={`${style.heading}`}>
            <h1>Best Deals</h1>
        </div>
        <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-10 lg:grid-cols-4 xl:grid-cols-5 xl:gap-[30px]'>
            {
                Data && Data.map((i,index)=>{
                    console.log(i,"productInfo")
                 return   <ProductCard data={i} key={index}></ProductCard>
                })
            }
        </div>
    </div>
  )
}

export default BestDeals