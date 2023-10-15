import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {
  const productData = useSelector((state) => state.gaytri.productData)
  console.log("dasdasd",productData)
  return (
    <div>
     {/* add imahe */}

     <div>
      <CartItem/>
      <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
<div>
  <h2>
    Cart Total 
  </h2>
</div>
      </div>
     </div>
    </div>
  )
}

export default Cart
