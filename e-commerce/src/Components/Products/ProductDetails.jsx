import React, { useState } from 'react'
import style from '../../styles/styles';

const ProductDetails = ({data}) => {
 const [count,setCount]= useState(1);
 const [click,setClick] = useState(false)
  return (
    <div className='bg-white'>
        {data? <div className={`${style.section} w-[90%] 800px:w-[80%] h-screen` }>
         <div className='w-full py-5'>
          <div className='block w-full 800px:flex'>
            <div className='w-full 800px:w-[50%]'></div>
          </div>
         </div>
        </div>:""}
    </div>
  )
}

export default ProductDetails