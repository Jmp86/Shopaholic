import React, {useState, useContext, useEffect, useCallback} from "react"
import {MessageContext} from "./message"
import {UserContext} from './user';
import {useHistory, Redirect} from 'react-router-dom'


const CartContext = React.createContext()


function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const {user} = useContext(UserContext)
    const {setMessage} = useContext(MessageContext)

    const getCart = useCallback(async () => {
        if (user) {
        try {
            const resp = await fetch('/api/v1/carts/' + user.cart.id)
             if (resp.status === 200) {
                const data = await resp.json() 
                console.log(data)
                setCart({data})
             } 
        } catch (e) {
            setMessage({message: "No items to display", color: "red"})
        }}
    }, [setMessage, user])

    return (
        <CartContext.Provider value={{cart, setCart, getCart}}>
            {children}
        </CartContext.Provider>
    )

    }

    export {CartContext, CartProvider}