import CartItemCard from '../components/CartItemCard';
import {CartContext} from '../context/cart';
import {useContext, useState, useEffect} from 'react';
import {MessageContext} from "../context/message";
import {UserContext} from '../context/user'
import Button from '../components/Button'


const Cart = () => {
    const {cart, getCart} = useContext(CartContext);
    const {setMessage} = useContext(MessageContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        getCart()
        // console.log(id)
        }, [getCart])

        

    const finalItems = cart ? cart.data.items_in_cart : null
    const renderItems = finalItems?.map(item => <CartItemCard item={item}/> )

    return (
        <div>
            {renderItems}
            {console.log(cart.data.items_in_cart)}
            <Button>
                Submit Order
            </Button>
        </div>
    );
}
// deleteReview={deleteReview}/>

export default Cart;