import React from 'react'
import ProductList from './ProductList'

const Home = ({data}) => {
  return (
    <div>
      <h1>This is home Component</h1>
      <ProductList data={data}/>
    </div>
  )
}

export default Home
