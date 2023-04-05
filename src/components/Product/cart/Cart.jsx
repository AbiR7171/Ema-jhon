import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart, clearFromCart, children}) => {
    let Total = 0;
    let totalShipping = 0;
    let quantity = 0;
   cart.map(product => {
    if(product.quantity === 0){
      product.quantity = 1;
        }
  
    Total = Total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
   
   });
   const text = Total *7 / 100 ;
   const grandTotal = Total + totalShipping + text;
    console.log(cart)
    return (
        <div className='cart'>
            <h2>Order summary</h2>
                      <p>selected items : {quantity}</p>
                      <p>Total Price : {Total}</p>
                      <p>Total Shipping Charge : {totalShipping}</p>
                      <p>Tax : {text.toFixed(2)}</p>
                      <h4>Grand Total:{grandTotal.toFixed(2)}</h4>
                      <button onClick={clearFromCart} className='clearBtn'>
                        Clear cart
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                     {
                      children
                     }
        </div>
    );
};

export default Cart;