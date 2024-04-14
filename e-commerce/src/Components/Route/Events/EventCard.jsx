import React from 'react'
import style from '../../../styles/styles'
import CountDown from "./Countdown/CountDown.jsx"

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 `}>
        <div className="w-full lg:w-[50%] m-auto">
            <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"></img>
        </div>
        <div className={`w-full lg:[w-50%] flex flex-col justify-center`}>
            <h2 className={`${style.productTitle}`}> Iphone 14pro max 8/256gb</h2>
            <p>
             
             
               
          
                Voluptatem itaque aliquam accusamus, praesentium aspernatur iure, 
                a illo voluptate eum possimus sit cumque ducimus numquam porro, et magni. Dignissimos, obcaecati iure.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatem itaque aliquam accusamus, praesentium aspernatur iure, 
                a illo voluptate eum possimus sit cumque ducimus numquam porro, et magni. Dignissimos, obcaecati iure.
                
                Voluptatem itaque aliquam accusamus, praesentium aspernatur iure, 
                a illo voluptate eum possimus sit cumque ducimus numquam porro, et magni. Dignissimos, obcaecati iure.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatem itaque aliquam accusamus, praesentium aspernatur iure, 
                a illo voluptate eum possimus sit cumque ducimus numquam porro, et magni. Dignissimos, obcaecati iure.
            </p>
            <div className='flex py-2 justify-between'>
                <div  className='flex'>
                        <h5 className='font-[500] text-[18xp] text-[#d55b45] pr-3 line-through'>
                            1099$
                        </h5>
                        <h5 className='font-[500] text-[20xp] text-[#333] pr-3  bold'>
                            799$
                        </h5>
                        
                </div>
                <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                            120 sold
                        </span>
            </div>
            <CountDown></CountDown>
        </div>
    </div>
  )
}

export default EventCard