import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products}) {
    
  return (
    <>
    <div>
            {products && products.map((product, index) => (
              <ProductItem key={index} product={product}/>
            ))}
    </div>
    </>
  )
}

export default ProductList