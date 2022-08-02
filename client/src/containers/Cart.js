import CartItemCard from '../components/CartItemCard';
import {CartContext} from '../context/cart';
import {useContext, useState, useEffect} from 'react';
import {MessageContext} from "../context/message";
import {UserContext} from '../context/user'
import Button from '../components/Button'
import {Link} from 'react-router-dom'


const Cart = () => {
    const {cart, getCart, setCart} = useContext(CartContext);
    const {setMessage} = useContext(MessageContext);
    const {user} = useContext(UserContext);



    useEffect(() => {
        getCart()
        }, [getCart])


    const handleDelete = (index) => {
        cart.data.items_in_cart.splice(index, 1)
        // const filteredItems = cart.data.items_in_cart.filter(item => item !== index)
        // setCart(filteredItems)
        console.log(index)

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
                setMessage({message: "Item removed from  cart", color: "green"})
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

        

    const finalItems = cart ? cart.data.items_in_cart : null
    const renderItems = finalItems?.map((item, index) => <CartItemCard index={index} handleDelete={handleDelete} item={item}/> )

    return (
        <div>
            {renderItems}
            {console.log(finalItems)}
            <Button>
                Submit Order
            </Button>
        </div>
    );
}


export default Cart;