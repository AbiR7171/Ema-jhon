import React from 'react';
import './Items.css'
import { TrashIcon } from '@heroicons/react/24/solid'
const Items = ({item,removeCart}) => {
    const {id, name, quantity, price, img} = item;
    return (
        <div className='items'>
            <div className='item-info' >
                <img src={img} />
                <div className='item-deatiels'>
                    <h4>{name}</h4>
                    <p>price: <span className='price'>${price}</span> </p>
                    <p>quantity: <span className='price'>{quantity}</span> </p>
                </div>
            </div>
            <button onClick={()=>removeCart(id)}>
            <TrashIcon className="h-6 icon w-6 text-blue-500" />
            </button>
        </div>
    );
};

export default Items;