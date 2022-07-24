import React, {useState, useContext, useEffect, useCallback} from "react"
import {MessageContext} from "../context/message"
import {useHistory, Redirect} from 'react-router-dom'
import {categories} from '../config.js';

const ItemContext = React.createContext()


function ItemProvider({children}) {
    const [item, setItem] = useState([]);
    const {setMessage} = useContext(MessageContext)

    const getCategories = useCallback(async () => { 
        try {
            const resp = await fetch('https://amazon24.p.rapidapi.com/api/category?country=US', categories)
             if (resp.status === 200) {
                const data = await resp.json() 
                console.log(data)
                setItem({data})
             } 
        } catch (e) {
            setMessage({message: "No items to display", color: "red"})
        }
    }, [setMessage])

    return (
        <ItemContext.Provider value={{item, setItem, getCategories}}>
            {children}
        </ItemContext.Provider>
    )

    }

    export {ItemContext, ItemProvider}