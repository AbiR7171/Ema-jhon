import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Product/cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
   useEffect(()=>{
    const getCart = getShoppingCart();
    const getProduct = [];
    for(const id in getCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = getCart[id];
            addedProduct.quantity = quantity;
            getProduct.push(addedProduct)
        }
    }
    setCart(getProduct)

   },[products])
    const addTocart = (product)=>{
        const newCart =  [...cart, product] 
        setCart(newCart)
        addToDb(product.id)
    }
    
    const clearFromCart =()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div>
            <div className='Shop-container'>
                <div className='product-container'>
                     {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        addTocart={addTocart}
                        ></Product>)
                     }
                </div>
                <div className='summary-container'>

                      <Cart cart={cart}
                      clearFromCart={clearFromCart}
                      >
                        <Link to="/order">
                        <button  className='ReviewBtn'>
                        Review Order 
                        <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        </Link>
                      </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;