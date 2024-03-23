import React from 'react'
import style from '../../../styles/styles'
import { brandingData } from '../../../static/static'
import { categoriesData } from '../../../static/static'
import { useNavigate } from 'react-router-dom'

const Categories = () => {

    const navigate = useNavigate();
  return (
    <div>
        <div className={`${style.section} hidden sm:block`}>
            <div className={`branding my-12 flex justify-between w-full shadow-lg bg-white p-5 rounded-md`}>
                {
                    brandingData && brandingData.map((i,index)=>{
                     return   <div className='flex items-start' key={index}>
                            {i.icon}
                            <div className='px-3'>
                                <h3 className='font-bold text-sm md:text-base'>
                                    {i.title}
                                </h3>
                                <p className='text-xs md:text-sm'></p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className={`${style.section} bg-white p-6 rounded-lg mb-12`} id ="categories">
            <div className='grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[20px] lg:grid-cols-4 lg:gap-[20px] xl:gap-[30px]'>
                     {categoriesData && categoriesData.map((i)=>{
                          const handleSubmit=(i)=>{
                           navigate(`/product?category=${i.title}`)
                          }
                          return(
                            <div className='w-full h-[100%] flex flex-col  items-center 
                            justify-between cursor-pointer' key={i.id} onClick={()=>{handleSubmit(i)}}>
                               
                                <img src={i.image_Url}  className= "w-[150px] object-cover " alt=''></img>
                                <h5 className={`text-[14px] leading[1.3] py-4`}>{i.title}</h5>
                            </div>
                          )
                         
                     })}   
            </div>
        </div>
    </div>
  )
}

export default Categories