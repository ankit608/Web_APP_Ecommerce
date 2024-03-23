import React from 'react'
import style from '../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={`rlative min-h-[70vh] 800px:min-h-[80vh] w-[100%] bg-no-repeat ${style.noramlFlex}`}
     style={{backgroundImage:"url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)"}}
    >
    
      <div className={`${style.section} w-[90%] 800px:w-[60%]` }>
        <h1 className={`text-[20px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
            Best Collection for <br></br> Home Decoration
        </h1>
        <p className='pt-5 text-[14px] font-Poppins font-[400] text-[#000000ba]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita
             aliquam culpa, doloribus nemo esse beatae fugiat debitis laborum aliquid 
             recusandae vel ad soluta fugit saepe, sint alias doloremque. Molestiae!
        </p>
        <Link to = "/products" className='inline-block'>
            <div className= {`${style.button} mt-5`}>
                <span className=" text-[#fff] font-[poppins] text-[14px]">
                    Shop Now
                </span>
            </div>
        </Link>
      </div>

        </div>
  )
}

export default Hero