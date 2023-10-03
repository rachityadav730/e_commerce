import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className = 'max-w-screen-xl mx-auto grid-cols-4'> 
        <div className='flex flex-col gap-7'>
            <p className='text-white text-sm tracking-wide'>@ React.com</p>
                <div className='flex gap-5 text-lg text-grey-400'>
                <AiFillCaretRight className='hover:text-white duration-300 cursor-pointer'/>
                <AiFillCaretRight className='hover:text-white duration-300 cursor-pointer'/>
                <AiFillCaretRight className='hover:text-white duration-300 cursor-pointer'/>
                <AiFillCaretRight className='hover:text-white duration-300 cursor-pointer'/>

                </div>
        </div>

        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
            <div className='text-base flex flex-col gap-2'>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><AiFillCaretRight/></span>999999999</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><AiFillCaretRight/></span>999999999</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><AiFillCaretRight/></span>999999999</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><AiFillCaretRight/></span>999999999</p>
             
            </div>
        </div>

        <div>

        <h2 className='text-2xl font-semibold text-white mb-4'>Profile us</h2>
        <div className='text-base flex flex-col gap-2'>
                <p>999999999</p>
                <p>999999999</p>
                <p>999999999</p>
                <p>999999999</p>
            </div>

        </div>



        <div className='flex flex-col justify-center'>
            <input
            placeholder='Email' 
            className='bg-transparent border px-4 py-2 text-sm'
            type='text'/>
            <button className='text-sm border text-white border-t-0 hover:bg-grey-900 active:bg-white active:text-black'>Subscribe</button>

        </div>





      </div>
    </div>
  )
}

export default Footer
