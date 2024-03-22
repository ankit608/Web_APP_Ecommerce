import React, { useState } from 'react'
import style from '../../styles/styles'
import { Link } from 'react-router-dom'
import {productData} from "../../static/static.js"
import { AiOutlineSearch } from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import {BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {
    
    const [searchTerm, setSearchTerm]= useState("")
    const [searchData,setSearchData]= useState(null);
    const [active, setActive] = useState(false)
    window.addEventListener("scroll",()=>{
        if(window.screen>70){
            setActive(true)

        }else{
            setActive(false)
        }
    })
    const handleSearchChange=(e)=>{
        const term = e.target.value
        setSearchTerm(term)
       
        var filteredProducts = productData.filter((product)=>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
          if(term==""){
            filteredProducts = null
          }
        setSearchData(filteredProducts)
        console.log(filteredProducts,"kdshfk")
    }
  return (
    <div className={`${style.section}`}>
        <div className='hidden 800px: h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
            <div>
                <Link to = "/">
                    <img src='https://shopo.quomodothemes.website/assets/images/logo.svg' alt=''/>
                </Link>
            </div>
            {/*search box*/}
            <div className='w-[50%] relative'>

    <input  className ="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"type='text' placeholder='Search Product...' value={searchTerm} onChange={handleSearchChange}>

              </input>
              <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer'></AiOutlineSearch>
               {
                 searchData && searchData.length !==0 ? (
                 <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                    {searchData&&searchData.map((i,index)=>{
                      const d  = i.name
                      const Product_name = d.replace(/\s+/g,"_")
                      return(
                        <Link to = {`/product/${Product_name}`}>
                            <div className="w-full flex itmes-start-py-3">
                                <img src={i.image_Url[0].url} alt=""
                                 className='w-[40px] h-[40px mr-[10px]'
                                ></img>
                                <h1>{i.name}</h1>
                            </div>
                            
                        </Link>
                      )
                    })}
                 </div>): null
               }
            </div>
            <div className={`${style.button}`}>
                <Link to = "/seller">
                 <h1 className='text-[#fff] flex items-center'>
                 Become Seller <IoIosArrowForward className='ml-1 mt-1'></IoIosArrowForward>
                 </h1>
                </Link>
            </div>
        </div>
       <div className={``}>
       <div className={`${style.section} relative ${style.normalFlex} justify-between`}>
        {/* categories */}
        <div>
            <div className='relative h-[60px] mt-[10px] w-[270px] hidden 800px:block'>
                <BiMenuAltLeft size={30} className='absolute top-3 left-2'></BiMenuAltLeft>
            </div>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Header