import React from 'react'
import Product from './Product'

const ProductList = ({data}) => {
  return (
    <div>
      <h1>this is Product list component</h1>
      <Product data={data}/>
    </div>
  )
}

export default ProductList
