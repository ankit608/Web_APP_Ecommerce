import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../../../styles/styles';
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar,AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx"

function ProductCard({data}) {
    const[click,setClick] = useState(false);
    const [open,setOpen] = useState(false);
     const d = data.name
     console.log(d,"name1");
    
      const product_name = d.replace(/ /g,"-");
      console.log(product_name,"name2dd")
  return (
    <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
        <div className='flex justify-end'></div>
        <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url} className='w-full h-[170px] object-contain'></img>
            
        </Link>
        <Link to="/">
            <h5 className={`${style.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
            <h4 className='pb-3 font-[500]'>
                {
                    data.name.length > 40 ? data.name.slice(0,40)+"...": data.name
                }
            </h4>
            <div className='flex'>
                <AiFillStar className='mr-2 cursor-pointer' color='#F6BA00' size={20}></AiFillStar>
                <AiFillStar className='mr-2 cursor-pointer'color='#F6BA00' size={20}></AiFillStar>
                <AiFillStar className='mr-2 cursor-pointer'color='#F6BA00' size={20}></AiFillStar>
                <AiOutlineStar className='mr-2 cursor-pointer'  color='#F6BA00' size={20}></AiOutlineStar>
                <AiOutlineStar className='mr-2 cursor-pointer'  color='#F6BA00' size={20}></AiOutlineStar>
            </div>
            <div className='py-2 flex items-center justify-between'>
                <div className='flex' >
                    <h5 className={`${style.productDiscountPrice}`}>
                        {data.price===0?data.price:data.discount_price}
                        $
                    </h5>
                    <h4 className={`${style.price}`}>
                        {data.price ? data.price+"$":null}
                    </h4>
                </div>
                <span className='font-[400] text-[17px] text-[#68d284]'>
                    {data.total_sell? data.total_sell:null} sold
                </span>
            </div>
           
        </Link>
        <div>
    {click? <AiFillHeart size={20} className='cursor-pointer absolute right-2 top-5' onClick={()=>{setClick(!click)}}  color='red' title='Remove From the wishList'></AiFillHeart>:
      <AiOutlineHeart size={20} className='cursor-pointer absolute right-2 top-5' onClick={()=>{setClick(!click)}}  color='#333' title='Add to wishList'></AiOutlineHeart>
    }        
         <AiOutlineEye size={20} className='cursor-pointer absolute right-2 top-14'  color='#333' title='Add to wishList' onClick={()=>{setOpen(true)}}></AiOutlineEye>
         <AiOutlineShoppingCart size={20} className='cursor-pointer absolute right-2  top-24'   color='#333' title='Add to Cart'></AiOutlineShoppingCart>
            
       
            </div>
           
            {
                open? <ProductDetailsCard  click= {click} setClick={setClick}open={open} setOpen={setOpen} data={data}></ProductDetailsCard>:null
            }
      </div>
  )
}

export default ProductCard