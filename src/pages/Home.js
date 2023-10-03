import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
const Home = () => {
  return (
    <div>
      <h1 className='text-red-600'>
        <Banner/>
        <Product/>
      </h1>
    </div>
  )
}

export default Home
