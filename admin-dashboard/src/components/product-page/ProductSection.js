import React, { useState } from 'react'
import ProductItem from './ProductItem'

function ProductSection({data,productData}) {
    const [products,setProducts] = useState(productData)
    
    
    function handleProductSort(event){
        
        if(event.target.dataset){
          let propertyName = event.target.dataset.name;
          
          
          if(propertyName === 'title' || propertyName === 'category'){
            setProducts(prev=>prev.toSorted((a,b)=>a[propertyName].localeCompare(b[propertyName])))
          }
          else if(propertyName === 'price' || propertyName === 'discount')
            setProducts(prev=>prev.toSorted((a,b)=>a[propertyName] - (b[propertyName])))
        }
      }
  return (
    <div className="product-table" onClick={handleProductSort}>
          <ul className="product-table-title">
            <li className="product-name" data-name='title'>Product Name</li>
            <li className="product-id">Product ID</li>
            <li className="product-price" data-name='price'>Price</li>
            <li className="product-stock" data-name='stock'>Stock</li>
            <li className="product-status">Availability</li>
            <li className="product-category" data-name='category'>Category</li>
            <li className="product-discount" data-name='discount'>Discount</li>
            <li className="product-action">Action</li>
          </ul>

          {data && (
            <div>
            {products.map((product, index) => (
              <ProductItem key={index} product={product}/>
            ))}
          </div>
          )}
        </div>
  )
}

export default ProductSection