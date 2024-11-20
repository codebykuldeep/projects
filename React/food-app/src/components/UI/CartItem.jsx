import React from 'react'
import { currencyFormatter } from '../../util.js/formatting'

export default function CartItem({name,price,quantity,onDecrease,onIncrease}) {
  return (
    <li className='cart-item'>
        <p>{name} - {quantity} x {currencyFormatter.format(price)}</p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}>-</button>
            <button>{quantity}</button>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}
