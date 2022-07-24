import React, { useEffect, useContext } from "react";
import CartItemCard from '../components/CartItemCard';
import {CartContext} from '../context/cart';
// import {useContext, useState, useEffect, useCallback} from 'react';
// import {MessageContext} from "../context/message";


const Cart = () => {
    const {cart, getCart} = useContext(CartContext)
    // const {setMessage} = useContext(MessageContext)

    useEffect(() => {
        getCart()
      }, [getCart])

    return (
        <div>
            {cart ? cart.items_in_cart.map(item => <CartItemCard key={item.id} item={item}/> ) : null}
        </div>
    );
}
// deleteReview={deleteReview}/>

export default Cart;