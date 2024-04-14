import React, { useState } from 'react'
import Header from '../Components/Layout/Header'
import { Footer } from '../Components/Layout/Footer'
import ProductDetails from  "../Components/Products/ProductDetails.jsx"
import { useParams } from 'react-router-dom'
import { productData } from '../static/static.js'
import { useEffect } from 'react'
const ProductDeatailsPage = () => {
    const [option,setOption] = useState(1);
    console.log(option,"option")
    const optionHandler=(a) =>{
          
             setOption(a);
    }
    const {name} = useParams();
    console.log(name)
    const productName = name.replace(/-/g ," ")
    console.log(productName,"productName")
    const [data,setData] = useState(null)
    console.log(name,"....")
  
    
    useEffect(()=>{
       const data = productData.find((i)=>{return(i.name===productName)})
       setData(data)
      },[])
    console.log(data);
   
   
  return (
      <div>
        <Header activeHeading={option} setOption = {optionHandler}></Header>
        <ProductDetails data={data}></ProductDetails>
        <Footer></Footer>
      </div>
  )
}

export default ProductDeatailsPage
