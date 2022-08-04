import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"



const OrderContext = React.createContext()


function OrderProvider({children}) {
    const [orders, setOrders] = useState();
    const {setMessage} = useContext(MessageContext)

    const getOrders = useCallback(async () => {
        try {
            const resp = await fetch('/api/v1/orders')
             if (resp.status === 200) {
                const data = await resp.json() 
                console.log(data)
                setOrders({data})
             } 
        } catch (e) {
            setMessage({message: "No orders to display", color: "red"})
        }
    }, [setMessage, setOrders])


    return (
        <OrderContext.Provider value={{orders, setOrders, getOrders}}>
            {children}
        </OrderContext.Provider>
    )

    }

    export {OrderContext, OrderProvider}