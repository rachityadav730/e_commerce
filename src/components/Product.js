import React from 'react'
import ProductCart from './ProductCart'

const Product = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>
            Shopping Everday
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
      <p className='max-w-[700px] test-grey-600 text-center'>
      You can use different background colors for the avatar. The following demo generates the color based on the name of the person.
      </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        
        
        {
          products.map((item) =>(
                    <ProductCart key= {item._id} product= {item}/>
          )
          )
        }
      </div>
    </div>
  )
}

export default Product
