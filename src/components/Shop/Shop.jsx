import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className='Shop-container'>
                <div className='product-container'>
                     {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                     }
                </div>
                <div className='summary-container'>

                      <h2>product summary is here</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;