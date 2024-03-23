import React, { useState } from 'react'
import style from '../../styles/styles'
import { Link } from 'react-router-dom'
import { categoriesData, productData } from "../../static/static.js"
import { AiOutlineHeart, AiOutlineSearch , AiOutlineShoppingCart} from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { BiMenuAltLeft } from 'react-icons/bi'
import DropDown1 from "./DropDown.jsx"
import { Navbar } from './Navbar.jsx'
import{CgProfile} from "react-icons/cg"
const Header = ({ activeHeading, setOption }) => {
    console.log(activeHeading, "activeHeading")
    const [searchTerm, setSearchTerm] = useState("")
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false)
    const [DropDown, setDropDown] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.screen > 70) {
            setActive(true)

        } else {
            setActive(false)
        }
    })
    const handleSearchChange = (e) => {
        const term = e.target.value
        setSearchTerm(term)

        var filteredProducts = productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
        if (term == "") {
            filteredProducts = null
        }
        setSearchData(filteredProducts)
        console.log(filteredProducts, "kdshfk")
    }
    return (
        <>
            <div className={`${style.section}`}>
                <div className=' hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
                    <div>
                        <Link to="/">
                            <img src='https://shopo.quomodothemes.website/assets/images/logo.svg' alt='' />
                        </Link>
                    </div>
                    {/*search box*/}
                    <div className='w-[50%] relative'>

                        <input className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md" type='text' placeholder='Search Product...' value={searchTerm} onChange={handleSearchChange}>

                        </input>
                        <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer'></AiOutlineSearch>
                        {
                            searchData && searchData.length !== 0 ? (
                                <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                                    {searchData && searchData.map((i, index) => {
                                        const d = i.name
                                        const Product_name = d.replace(/\s+/g, "_")
                                        return (
                                            <Link to={`/product/${Product_name}`}>
                                                <div className="w-full flex itmes-start-py-3">
                                                    <img src={i.image_Url[0].url} alt=""
                                                        className='w-[40px] h-[40px mr-[10px]'
                                                    ></img>
                                                    <h1>{i.name}</h1>
                                                </div>

                                            </Link>
                                        )
                                    })}
                                </div>) : null
                        }
                    </div>
                    <div className={`${style.button}`}>
                        <Link to="/seller">
                            <h1 className='text-[#fff] flex items-center'>
                                Become Seller <IoIosArrowForward className='ml-1 mt-1'></IoIosArrowForward>
                            </h1>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={`${active === true ? "shadow-sm fixed top-0;left-0 ;z-10" : null} transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}>
                <div className={`${style.section} relative ${style.noramlFlex} justify-between `}>
                    {/*categories*/}

                    <div className="relative h-[60px] mt-[10px] w-[270px] hidden 800px:block">
                        <BiMenuAltLeft size={30} className='absolute top-3 left-2'></BiMenuAltLeft>
                        <button className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}>
                            All categories
                        </button>
                        <IoIosArrowDown size={20} className='absolute right-2 top-4 cursor-pointer' onClick={() => { setDropDown(!DropDown) }}>

                        </IoIosArrowDown>
                        {DropDown ? <DropDown1 categoriesData={categoriesData} setDropDown={setDropDown}></DropDown1> : null}

                    </div>
                    <div className={`${style.noramlFlex}`}>
                        <Navbar active={activeHeading} setOption={setOption}></Navbar>
                    </div>
                    <div>
                        <div className={`${style.noramlFlex}`}>
                            <div className="relative cursor-pointer mr-[15px]">
                                <AiOutlineHeart size={30} color='rgb(255 255 255/83%'>

                                </AiOutlineHeart>
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    0
                                </span>
                            </div>
                           
                            <div className="relative cursor-pointer mr-[15px]">
                                <AiOutlineShoppingCart size={30} color='rgb(255 255 255/83%'>

                                </AiOutlineShoppingCart>
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    0
                                </span>
                            </div>
                           
                            <div className="relative cursor-pointer mr-[15px]">
                               <Link  to = "/login">
                               <CgProfile size={30} color='rgb(255 255 255/83%'></CgProfile>

                               </Link>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Header

/*

*/