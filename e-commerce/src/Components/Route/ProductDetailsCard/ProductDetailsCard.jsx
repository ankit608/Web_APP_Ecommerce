import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import style from '../../../styles/styles';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage,AiOutlineShoppingCart} from 'react-icons/ai';

const ProductDetailsCard = ({setOpen,data}) => {
    const [count,setCount] = useState(1);
    const [click,setClick] = useState(false);
    const[select,setSelect] = useState(false);
    const decrement = () =>{
        const a = count-1;
        if(count>0){
            setCount(a)
    }}
    const Increment = () =>{
        const a = count+1;
        
            setCount(a)
    }
     const handleMessageSubmit = ()=>{

     }
    return (
     <div className='bg-[#fff]'>
         {
            data ? (<div className='fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center'>
                <div className='w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[80vh] bg-white rounded-md shadow-sm relative p-4'>
                    <RxCross1 size={30} className='absolute right-3 top-3 z-50' onClick={()=>{setOpen(false)}}>

                    </RxCross1>
                    <div className='block w-full 800px:flex'>
                        <div className='w-full 800px:w-[50%]'>
                            <img src={data.image_Url[0].url}></img>
                            <div className='flex'>
                                <img src={data.shop.shop_avatar.url} alt='' className='w-[50px] h-[50px] rounded-full mr-2'></img>
                            <div>
                            <h3 className={`${style.shop_name}`}>
                                {data.shop.name}
                                </h3>    
                                <h5 className='pb-3 text-[15px]'>
                                    ({data.shop.ratings}) Ratings
                                </h5>
                            </div>
                            
                            </div>
                            <div className={`${style.button} bg-[#000] mt-4 rounded-[4px] h-11`} onClick={handleMessageSubmit}>
                                <span className='text-[#fff] flex items-center'>
                                    Send Message <AiOutlineMessage className='ml-1'></AiOutlineMessage>
                                </span>
                            
                            </div>
                            <h5 className='text-[16px] text-[red] mt-5'>({data.total_sell}) Sold out</h5>
                        </div>
                        <div className='w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]'>
                            <h1 className={`${style.productTitle} text-[20px]`}>
                                {data.name}
                            </h1>
                            <p>{data.description}</p>
                            <div className='flex pt-3'>
                            <h4 className={`${style.productDiscountPrice}`}>{data.discount_price}$</h4>
                            <h3 className={`${style.price}`}>{data.price?data.price+"$":null}</h3>
                        </div>
                       
                            <div className='flex items-center mt-12 justify-between pr-3 '>
                                <div className='flex items-center  ' >
                                <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-1 px-4 shadow-lg hover:opacity-75  transition-all' onClick={()=>{decrement()}}>-</button>
                                  <span className=' bg-gray-200 flex font-medium  px-4'>{count}</span>
                                <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-1 px-4  shadow-lg hover:opacity-75  transition-all'onClick={()=>{Increment()}}>+</button>
                                </div>
                                
                               {!click?<AiOutlineHeart  className='cursor-pointer ' size={25}  color='red' onClick={()=>{setClick(true)}} ></AiOutlineHeart>:<AiFillHeart className='cursor-pointer ' size={25}  color='red' onClick={()=>{setClick(false)}}></AiFillHeart>} 
                            </div>
                            <div className='flex items-center'>
                            <div className={`${style.button} bg-[#000] mt-4 rounded-[4px] h-11 text-white flex items-center`}>
                                Add to cart 
                            <AiOutlineShoppingCart  className='cursor-pointer ml-2' size={25}  color='#fff' title='Add to Cart'></AiOutlineShoppingCart>
                            
                            </div>
                           
                            </div>
                           
                        
                        </div>
                        
                    </div>
                </div>
            </div>) : null
         }
     </div>
   
  )
}

export default ProductDetailsCard