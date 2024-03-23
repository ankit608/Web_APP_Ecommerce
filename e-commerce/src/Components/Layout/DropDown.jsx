import React from 'react'
import style from '../../styles/styles'
import { useNavigate } from 'react-router-dom'

const DropDown = ({ categoriesData, setDropDown }) => {
    const navigate = useNavigate();
    console.log(categoriesData, "categories data")
    const submitHandle = (i) => {
        navigate(`/products?category=${i.title}`)
        setDropDown(false);
        window.location.reload();
    }
    return (
        <div className='pb-4 w-[270px] bg-[#fff] absolute z-30  rounded-b-md shadow-sm'>
            {
                categoriesData && categoriesData.map((i, index) => {
                    return <div key={index} className={`${style.noramlFlex}`} onClick={() => { submitHandle(i) }}>
                        <img src={`${i.image_Url}`}
                            style={{
                                width: "25px", height: "25px", objectFit: "contain", marginLeft: "10px", userSelect: "none"

                            }} alt=''></img>
                        <h3 className='m-3 cursor-pointer select-none'>{i.title}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default DropDown


/*


*/