
import React from 'react'
import style from '../../styles/styles'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/static'
export const Navbar = ({active,setOption}) => {
     console.log(active)
    return (
    <div className={`${style.noramlFlex}`}>
        {
            navItems && navItems.map((i,index)=>{
                
           return     <div className='flex'>
            <Link to = {i.url}  className={`${active===index+1 ? "text-[#17dd1f]":"text-[#fff]"} font-[500] px-6 cursor-pointer`} onMouseEnter={()=>{setOption(index+1)}} onMouseLeave={()=>{setOption(1)}}>
            {i.title} 
            </Link>
                          
                </div>
            })
        }
    </div>
  )
}
