import CartItemCard from '../components/CartItemCard';
import {CartContext} from '../context/cart';
import {useContext, useEffect} from 'react';
import {MessageContext} from "../context/message";
import {UserContext} from '../context/user'
import {OrderContext} from '../context/order'
import Button from '../components/Button'
import {Link} from 'react-router-dom'


const Cart = () => {
    const {cart, getCart} = useContext(CartContext);
    const {setMessage} = useContext(MessageContext);
    const {user} = useContext(UserContext);
    const {getOrders} = useContext(OrderContext);


    useEffect(() => {
        getCart()
        }, [getCart])


    const handleDelete = (index) => {
        cart.data.items_in_cart.splice(index, 1)

        const remove = async () => {
            try {
              const resp = await fetch(`/api/v1/carts/${user.data.cart.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                  "items_in_cart": cart.data.items_in_cart
                })
            })
            if (resp.status === 200) {
                const data = await resp.json()
                setMessage({message: "Item removed from cart", color: "green"})
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }
            } catch(e) {
                setMessage({message: e.message, color: "red"})
            }
          }
        remove()
    }

    const handleOrder = () => {

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);


        const placeOrder = async () => {
            try {
              const resp = await fetch(`/api/v1/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                  "items_ordered": cart.data.items_in_cart,
                  "order_date": today.toDateString()
                })
            })
            if (resp.status === 201) {
                const data = await resp.json()
                getOrders()
                setMessage({message: "Order Received!", color: "green"})
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }
            } catch(e) {
                setMessage({message: e.message, color: "red"})
            }
          }

        const clearCart = async () => {
            try {
              const resp = await fetch(`/api/v1/carts/${user.data.cart.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                  "items_in_cart": []
                })
            })
            if (resp.status === 200) {
                const data = await resp.json()
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }
            } catch(e) {
                setMessage({message: e.message, color: "red"})
            }
          }
        
        placeOrder()
        clearCart()
    }

        

    const finalItems = cart ? cart.data.items_in_cart : null
    const renderItems = finalItems?.map((item, index) => <CartItemCard index={index} handleDelete={handleDelete} item={item}/> )

    return (
        <div>
            {renderItems}
            <Link to={`/profile/` + user.id}>
            <Button onClick={handleOrder}>
                Submit Order
            </Button>
            </Link>
        </div>
    );
}


export default Cart;