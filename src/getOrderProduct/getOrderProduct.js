import { useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb"
import Product from "../components/Product/Product";

const getOrderProduct =async() =>{
    const loadedProducts = await fetch("products.json")
    const products = await loadedProducts.json()
     
    const getCart = getShoppingCart();
    const cart = [];

    for(const id in getCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = getCart[id]
            addedProduct.quantity = quantity;
            cart.push(addedProduct)
        }
    }
    return cart;
}
export default getOrderProduct;