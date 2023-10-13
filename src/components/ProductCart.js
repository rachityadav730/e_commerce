import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCart = ({product}) => {
const navigate = useNavigate()
  const _id = product.title
  const idString = (_id)=>{
    return String(_id).toLowerCase().split(" ").join("")
  }
  const rootId = idString(_id)
  const handleDetails =() =>{
    navigate(`/product/${rootId}`,{
      state:{
        item: product
      }
    })
  }

  return (
    <div className='group relative'>
      <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden'>
        <img 
        className='w-full h-full object-cover group-hover:scale-110 duration-500'
        src={product.image} alt= "ProductImg"/>
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
      <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titleFont text-base font-bold'>{product.title}</h2>
          </div>
          <div className='flex gap-2 relative overflow-hidden w-28 text-sm'>
            <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
            <p>{product.price}</p>
            </div>
            <p className='absolute z-20 w-[100px] text-grey-500 hover:text-grey-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>Add to cart</p>
          </div>
      </div>

      <div>
        <p>
          {product.category}
        </p>
      </div>
      <div className='absolute top-4 rigth-0'>
        {
          product.isNew && (
            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>
              Sale
            </p>
          )
        }
      </div>
      </div>
    </div>
  )
}

export default ProductCart
