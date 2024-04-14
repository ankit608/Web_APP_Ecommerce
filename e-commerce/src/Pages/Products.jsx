import React, { useEffect } from 'react'
import Header from '../Components/Layout/Header'
import style from '../styles/styles'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { productData } from '../static/static'
import ProductCard from '../Components/Route/ProductCard/ProductCard'

export const Products = () => {

   const[searchParams] = useSearchParams();
   const categoryData = searchParams.get("category");
   const [data,setData]= useState([]);
   const[option,setOption] = useState(1);
    console.log(option,"option")
    const optionHandler=(a) =>{
          
             setOption(a);
    }
    useEffect(()=>{
        if(categoryData==null){
          const d = productData && productData.sort((a,b)=> a.total_sell-b.total_sell)
          setData(d);
        }else{
          const d = productData&& productData.filter((i)=>i.category === categoryData);
          setData(d)
        }
        //window.scrollTo()
        
    },[])
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
