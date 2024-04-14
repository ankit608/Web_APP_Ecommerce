import React, { useState } from 'react'
import Header from '../Components/Layout/Header'
import { Footer } from '../Components/Layout/Footer'
import style from '../styles/styles'
import { productData } from '../static/static'

const Faq = () => {
    const [option,setOption] =   useState(5)
    console.log(option,"option")
    const optionHandler=(a) =>{
          
             setOption(a);
    }
  return (
    <div>
        
        <Header activeHeading={option} setOption = {optionHandler}></Header>
        <Faqv></Faqv>
        
        <Footer></Footer>
    </div>
  )
}

const Faqv = ()=>{
    const [activeTab,setActiveTab] = useState(0);
  const toggle = (tab)=>{
        if(activeTab===tab){
            setActiveTab(0)
        }else{
            setActiveTab(tab);
        }
    }

    return(
        <div className={`${style.section} my-8`}>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>FAQ</h2>
            <div className='mx-auto space-y-4'>
                <div className='border-b border-gray-300 pb-4'>
                    <button className='flex items-center justify-between w-full' onClick={()=>toggle(1)}>
                    <span className='text-lg font-medium text-gray-900'>
                        How do I track my order
                    </span>
                     {
                        activeTab===1? (<svg className='h-6 w-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={2} d = "M6 18L18 6M6 6l12 12"></path>

                        </svg>): 
                        <svg className='h-6 w-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={2} d = "M9 5l7 7-7 "></path>

                    </svg>
                     }
                    </button>
                    {
                        activeTab===1 && (<div className='mt-4'>
                            <p className='text-base text-gray-500'>
                                WE typically process and ship orders within 1-2 hour
                                buisness days Depending Upon the location, it can take an additional 2-7
                                to your offer to arrive
                            </p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq