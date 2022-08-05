import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"
import {UserContext} from './user';


const CartContext = React.createContext()


function CartProvider({children}) {
    const [cart, setCart] = useState();
    const [cartTotal, setCartTotal] = useState(0);
    const {user} = useContext(UserContext)
    const {setMessage} = useContext(MessageContext)

    const getCart = useCallback(async () => {
        if (user) {
        try {
            const resp = await fetch('/api/v1/carts/' + user.data.cart.id)
            
             if (resp.status === 200) {
                const data = await resp.json() 
                setCart({data})
             } 
        } catch (e) {
            setMessage({message: "No items to display", color: "red"})
        }}
    }, [setMessage, user])

    const getTotal = useCallback(async () => {
        if (user) {
        try {
            const resp = await fetch(`/api/v1/carts/${user.data.cart.id}/cart_total`)
            
             if (resp.status === 200) {
                const data = await resp.json() 
                setCartTotal({data})
             } 
        } catch (e) {
            setMessage({message: "No items in cart", color: "red"})
        }}
    }, [setMessage, user])


    return (
        <CartContext.Provider value={{cart, setCart, getCart, getTotal, cartTotal}}>
            {children}
        </CartContext.Provider>
    )

    }

    export {CartContext, CartProvider}