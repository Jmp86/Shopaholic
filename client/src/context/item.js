import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"
import {API} from '../config.js';


const ItemContext = React.createContext()


function ItemProvider({children}) {
    const [item, setItem] = useState();
    const [itemList, setItemList] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [reorderList, setReorderList] = useState([]);
    const {setMessage} = useContext(MessageContext);

    const getItem = useCallback(async (id) => { 
        try {
            const resp = await fetch(`/api/v1/items/${id}`)
             if (resp.status === 200) {
                const data = await resp.json() 
                setItem(data)
             } else {
                setMessage({message: "No items available", color: 'red'})
             }
        } catch (e) {
           
        }
    }, [setMessage])

    const getBestSellers = (category) => {  
           fetch(`/api/v1/category/${category}`)
                .then(r => r.json())
                .then(data => {
                    setItemList({data})
            })
        }

    const createItem = async (newItem) => {
        try {
            const resp = await fetch("/api/v1/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "category": newItem.category,
                    "item_name": newItem.name,
                    "image": newItem.image,
                    "price": newItem.price,
                    "rating": newItem.rating
                })
            })
            if (resp.status === 201) {
                const data = await resp.json()
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }
    
        } catch(e) {
            setMessage({message: e.message, color: "red"})
        }
    }

    return (
        <ItemContext.Provider value={{item, itemList, setItem, setItemList, getItem, getBestSellers, createItem, orderedItems, setOrderedItems}}>
            {children}
        </ItemContext.Provider>
    )

    }

    export {ItemContext, ItemProvider}