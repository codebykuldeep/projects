import React from 'react'
import ProductItem from './ProductItem'
import { motion } from 'motion/react'
function ProductList({products}) {
    
  return (
    <>
    <motion.div layout initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            {products && products.map((product, index) => (
              <ProductItem key={index} product={product}/>
            ))}
    </motion.div>
    </>
  )
}

export default ProductList