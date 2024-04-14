import React from 'react'
import style from '../../../styles/styles'

const Sponsered = () => {
  return (
    <div className={`${style.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
        <div className='flex justify-between w-full'>
            <div className='flex items-start'>
                <img src ="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png" style={{width:"150px",objectFit:"contain"}}></img>
            </div>
            <div className='flex items-start'>
                <img src ="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"style={{width:"150px",objectFit:"contain"}}></img>
            </div>
            <div className='flex items-start'>
                <img src ="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"style={{width:"150px",objectFit:"contain"}}></img>
            </div>
            <div className='flex items-start'>
                <img src ="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"style={{width:"150px",objectFit:"contain"}}></img>
            </div>
            
        </div>
    </div>
  )
}

export default Sponsered