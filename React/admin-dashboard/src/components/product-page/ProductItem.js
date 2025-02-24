import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react'
import {useQueryClient } from 'react-query';
import { deleteProduct } from '../../util/HttpFunctions';

function ProductItem({product}) {
    product.status = product.stockAvail === 'true' ? 'Available' : 'Out of Stock';
    
   
    product.stock = product.stockAvail === 'true' ? product.stock : 0;
    const queryClient = useQueryClient();

    function handleDelete(){
      deleteProduct(product.id)
      .then(()=>queryClient.invalidateQueries({queryKey:['products'],}))
    }
    
  return (
    <div>
        <ul className="product-table-item" >
            <li className="product-name"><img src={product.image} alt={product.title + product.id} /> <span>{product.title}</span></li>
            <li className="product-id">#{product.id}</li>
            <li className="product-price">${product.price}</li>
            <li className="product-stock">{product.stock}</li>
            <li className="product-status">{product.status}</li>
            <li className="product-category">{product.category}</li>
            <li className="product-discount">{product.discount}%</li>
            <li className="product-action">
                <Link to={`edit/${product.id}`}>
                <motion.i whileHover={{rotate:[-50,0,-40,0]}} transition={{duration:0.6}}
                 className="fa-solid fa-pen"></motion.i>
                </Link>
                <div onClick={handleDelete}><i className="fa-solid fa-trash"></i></div>
            </li>
        </ul>
    </div>
  )
}

export default ProductItem