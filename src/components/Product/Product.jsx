import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props)
    const {img, price, ratings, seller,name} = props.product
   const addTocart = props.addTocart
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
                <button className='product-btn' onClick={()=>addTocart(props.product)}>
                    Add to cart
                     <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
               
            </div>
        </div>
    );
};

export default Product;