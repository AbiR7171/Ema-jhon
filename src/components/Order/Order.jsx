import React, { useState } from 'react';
import Cart from '../Product/cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Items from '../Items/Items';
import './Order.css'
import Product from '../Product/Product';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSave, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const addedCart = useLoaderData()
    const [cart, setCart] = useState(addedCart)
    const removeCart= (id)=>{
        const reaming = cart.filter(pd => pd.id !== id);
        setCart(reaming);
     removeFromDb(id)
    }
    
    const clearFromCart = () =>{
        setCart([])
        deleteShoppingCart()

    }

    return (
        <div className='Shop-container'>
             <div className='item-container'>
                {
                    cart.map(item=> <Items
                    key={item.id}
                    item={item}
                    removeCart={removeCart}
                    ></Items>)
                }
                </div>
                <div>
                <Cart cart={cart}
            clearFromCart={clearFromCart}
                >
                     <Link to="/checkout">
                     <button  className='ReviewBtn'>
                     Proceed Checkout
                        <FontAwesomeIcon icon={faSave} />
                        </button>
                        </Link>
                </Cart>
                </div>
        </div>
    );
};

export default Order;