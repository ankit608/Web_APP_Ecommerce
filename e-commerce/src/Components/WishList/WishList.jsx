
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import {IoBagHandleOutline} from 'react-icons/io5'
import style from '../../styles/styles'
import {HiPlus} from 'react-icons/hi'
import { HiOutlineMinus } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {BsCartPlus} from "react-icons/bs"
import { AiOutlineHeart } from 'react-icons/ai'

const cartData = [
    {
        name:"Iphone 14 pro max 256gb ssd and 8gb Ram silver colour",
        discription:"test",
        price:"999"
    },
    {
        name:"Iphone 14 pro max 256gb ssd and 8gb Ram silver colour",
        discription:"test",
        price:"999"
    },
    {
        name:"Iphone 14 pro max 256gb ssd and 8gb Ram silver colour",
        discription:"test",
        price:"999"
    },
    {
        name:"Iphone 14 pro max 256gb ssd and 8gb Ram silver colour",
        discription:"test",
        price:"999"
    },
    {
        name:"Iphone 14 pro max 256gb ssd and 8gb Ram silver colour",
        discription:"test",
        price:"999"
    },
    {
        name:"Iphone 14 pro max 256gb ssd and 8gb Ram silver colour",
        discription:"test",
        price:"999"
    },
]

const WishList = ({setWishList}) => {
    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 '>
            <div className='fixed top-0 right-0 overflow-y-scroll  h-full w-[25%] bg-white flex flex-col justify-between shadow-sm'>
                <div>
                    <div className='flex w-full justify-end pt-5 pr-5'>
                        <RxCross1 size={25} className='cursor-pointer' onClick={()=>{setWishList(false)}}></RxCross1>
                    </div>
                    <div className= {`${style.noramlFlex} p-4 `}>
                     <AiOutlineHeart size={25}  className='cursor-pointer'></AiOutlineHeart>
                    <h5 className='pl-2 text-[2-px] font-[500]'>
                        3 items
                    </h5>
                </div>
                <br></br>
                <div className='w-full border-t'>
                    {
                        cartData.map((i,index)=>{
                            return <CartSingle key ={index} data={i}></CartSingle>
                        })
                    }
                </div>
                </div>
                <div className='px-5 mb-3'>
                    <Link to = "/checkout">
                        <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}>
                            <h1 className='text-[#fff] text-[18px] font-[600]'>CheckOut Now (USD$1080)</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      )
}

const CartSingle = ({data}) =>{
    const[value,setValue] = useState(1);

    return(
        <div className='border-b p-4 '>
            <div className='w-full flex items-center'>
            <RxCross1 className='cursor-pointer' size={35}></RxCross1>
             <img  className=" w-[80px] h-[80px] ml-2"src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"></img>
              <div className='pl-[5px]'>
                <h1>{data.name}</h1>
                <h4 className='font-[400] text-[15px] text-[#00000082]'>${data.price}*{value}</h4>
                <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>
                  US${data.price}
                </h4>
               
              </div>
              <BsCartPlus size={65} className='cursor-pointer' title="Add to cart"></BsCartPlus>
            </div>
        </div>
    )
}

export default WishList