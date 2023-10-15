import React from 'react'
import Gaytri_logo from '../assets/Gaytri_outfit.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const productdata = useSelector((state) => state.gaytri.productData)
    console.log('productdata',productdata)
    return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-grey-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex item-center justify-between'>
            <div>
                <Link to="/">
                <img src= {Gaytri_logo} alt = "" height='60px' width={'60px'}/>
                </Link>
            </div>
            <div>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Home
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Pages
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Shop
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>

                        Element
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>

                        Blog
                    </li>


                </ul>

                <div className='relative'>
                <Link to="/cart">
                    <ShoppingCartIcon/>
                    </Link>
                    <span>{productdata.length}</span>
                </div>
                
            </div>

            
        </div>
    </div>
  )
}

export default Header
