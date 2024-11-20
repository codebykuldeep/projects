import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util.js/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./UI/CartItem";

export default function Cart(){
    const cartCtx =useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice + item.quantity*item.price,0)
    

    function handleHideCart() {
        userProgressCtx.hideCart();
    }
    function handleCheckout() {
        userProgressCtx.showCheckout();
    }
    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    
    return (
        <Modal className="cart" open={userProgressCtx.progress=== 'cart'
        } onClose= {userProgressCtx.progress==='cart' ?handleCloseCart : null}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item)=>(
                    <CartItem key={item.id} {...item} 
                    onIncrease={()=>cartCtx.addItem(item)}
                    onDecrease={()=>cartCtx.removeItem(item.id)}
                    />
                    
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleHideCart}>Close</Button>
                {cartCtx.items.length >0 && (<Button onClick={handleCheckout}>Go to Checkout</Button>)}
            </p>
        </Modal>
    )
}