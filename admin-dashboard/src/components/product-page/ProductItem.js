import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem({product}) {
    product.status = product.stockAvail === 'true' ? 'Available' : 'Out of Stock';
    
   
    product.stock = product.stockAvail === 'true' ? product.stock : 0;
    
  return (
    <>
        <ul className="product-table-item">
            <li className="product-name">{product.title}</li>
            <li className="product-id">#{product.id}</li>
            <li className="product-price">${product.price}</li>
            <li className="product-stock">{product.stock}</li>
            <li className="product-status">{product.status}</li>
            <li className="product-category">{product.category}</li>
            <li className="product-discount">{product.discount}%</li>
            <li className="product-action">
                <Link to={`edit/${product.id}`}><i className="fa-solid fa-pen"></i></Link>
                <div><i className="fa-solid fa-trash"></i></div>
            </li>
        </ul>
    </>
  )
}

export default ProductItem