import CartItemCard from '../components/CartItemCard';
import {CartContext} from '../context/cart';
import {useContext, useState, useEffect} from 'react';
import {MessageContext} from "../context/message";
import {UserContext} from '../context/user'
import {useParams} from 'react-router-dom'

const Cart = () => {
    const { id } = useParams()
    const {cart, getCart} = useContext(CartContext);
    const [cartList, setCartList] = useState([]);
    const {setMessage} = useContext(MessageContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        getCart(id)
        console.log(id)
        }, [getCart, id, cart])

    const finalItems = cart ? cart : cartList
    const renderItems = finalItems?.map(item => <CartItemCard key={item.id} item={item}/> )

    return (
        <div>
            {renderItems}
        </div>
    );
}
// deleteReview={deleteReview}/>

export default Cart;