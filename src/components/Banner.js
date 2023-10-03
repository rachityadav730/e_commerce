import React, { useState } from 'react'
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import { AiFillCaretRight } from 'react-icons/ai';

const Banner = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
  const data = [Image1,Image2,Image3,Image4]

  const prevSlide =() =>{
    setCurrentSlide(currentSlide === 0 ? 3 :(prev)=>prev -1)
  }

  const nextSlide =() =>{
    setCurrentSlide(currentSlide === 3 ? 0 :(prev)=>prev +1)
  }



  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-scren-h-[650px] relative'>
        <div style={{transform:`translateX(-${currentSlide *100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
        <img className='w-screen h-full object-cover' src ={Image1} loading='priority'/>
        <img className='w-screen h-full object-cover' src ={Image2} loading='priority'/>
        <img className='w-screen h-full object-cover' src ={Image3} loading='priority'/>
        <img className='w-screen h-full object-cover' src ={Image4} loading='priority'/>

        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
            <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-grey-700 flex items-center justify-center hover:cursor-pointer hover:bg-grey-700 hover:text-white active:bg-grey-900 duration-300'>
                <AiFillCaretRight/>
            </div>
            <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-grey-700 flex items-center justify-center hover:cursor-pointer hover:bg-grey-700 hover:text-white active:bg-grey-900 duration-300'>
            <AiFillCaretRight/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
