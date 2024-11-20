import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { CartContext } from '../store/CartContext'
import { currencyFormatter } from '../util.js/formatting'
import Input from './UI/Input'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'
import useHTTP from './Hooks/useHTTP'

const requestConfig ={
    method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
}

function Checkout() {
    const cartCtx =useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice + item.quantity*item.price,0)
  
    const userProgressCtx = useContext(UserProgressContext)
    
    function handleClose(){
        userProgressCtx.hideCheckout();
    }

    const {data,isLoading,error,sendRequest,clearData}=useHTTP('http://localhost:3000/orders',requestConfig)

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
      }

    function handleSubmit(event){
        event.preventDefault();

        const form = new FormData(event.target);
        const customerData = Object.fromEntries(form.entries());
        console.log(customerData);

        sendRequest(JSON.stringify({
                order:{
                    items:cartCtx.items,
                    customer:customerData
                }
            }));
        
        // {
        //     order:{
        //         items:cartCtx.items,
        //         customer:customerData
        //     }
        // }
        // fetch('http://localhost:3000/orders',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify()
        // })
    }

    let actions = (
        <>
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </>
      );
    
      if (isLoading) {
        actions = <span>Sending order data...</span>;
      }
    
      if (data && !error) {
        return (
          <Modal
            open={userProgressCtx.progress === 'checkout'}
            onClose={handleFinish}
          >
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>
              We will get back to you with more details via email within the next
              few minutes.
            </p>
            <p className="modal-actions">
              <Button onClick={handleFinish}>Okay</Button>
            </p>
          </Modal>
        );
      }


    return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>

            <Input label={'Full Name'} type='text' id='name'/>
            <Input label={'E-mail Address'} type='email' id='email'/>
            <Input label={'Street'} type='text' id='street'/>

            <div className='control-row'>
                <Input label={'Postal Code'} type='text' id='postal-code'/>
                <Input label={'City'} type='text' id='city'/>
            </div>

            {error && <p>Cannot submit order right Now...</p>}

            <p className="modal-actions">{actions}</p>
        </form>
    </Modal>
  )
}

export default Checkout