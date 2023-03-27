import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    const addTocart = (product)=>{
        const newCart =  [...cart, product]
        setCart(newCart)
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

                      <h2>Order summary{cart.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;