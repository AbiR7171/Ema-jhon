import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {img, price, ratings, seller,name} = props.product
    return (
        <div>
            <div className='product'>
                <div className='product-img'>
                    <img src={img} alt="" />
                </div>
                <div className='product-info'>
                    <div>
                    <h2 className='product-name'>{name}</h2>
                    <h5>Price: ${price}</h5>
                    </div>
                   
                    <div className='product-rating'>
                        <h5>Manufacturer:{seller}  </h5>
                        <h5>Rating:{ratings}</h5>
                    </div>
                    
                </div>
                <button className='product-btn'>Add to cart</button>
               
            </div>
        </div>
    );
};

export default Product;