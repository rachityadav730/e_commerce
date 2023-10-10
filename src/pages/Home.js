import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import { useLoaderData } from 'react-router-dom'
const Home = () => {

  const [products,setProducts] = useState([])
  const data = useLoaderData()
  console.log("conaasdas",data)
  useEffect(() =>{
    setProducts(data.data)
  },[data])



  return (
    <div>
      <h1 className='text-red-600'>
        <Banner/>
        <Product products = {products}/>
      </h1>
    </div>
  )
}

export default Home
