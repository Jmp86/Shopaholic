import React, {useState, useContext, useEffect, useCallback} from "react"
import {MessageContext} from "../context/message"
import {useHistory, Redirect} from 'react-router-dom'
import {API} from '../config.js';

const ItemContext = React.createContext()


function ItemProvider({children}) {
    const [item, setItem] = useState([]);
    const {setMessage} = useContext(MessageContext)

    const getItem = useCallback(async (productID) => { 
        try {
            const resp = await fetch('https://amazon24.p.rapidapi.com/api/product/' + productID + '?country=US', API)
             if (resp.status === 200) {
                const data = await resp.json() 
                console.log(data)
                setItem({data})
             } 
        } catch (e) {
            setMessage({message: "No items to display", color: "red"})
        }
    }, [setMessage])

    const getBestSellers = useCallback(async (category) => { 
        try {
            const resp = await fetch('https://amazon24.p.rapidapi.com/api/bsr/' + category + '?page=1', API)
             if (resp.status === 200) {
                const data = await resp.json() 
                setItem({data})
             } 
        } catch (e) {
            setMessage({message: "No items to display", color: "red"})
        }
    }, [setMessage])

    return (
        <ItemContext.Provider value={{item, setItem, getItem, getBestSellers}}>
            {children}
        </ItemContext.Provider>
    )

    }

    export {ItemContext, ItemProvider}