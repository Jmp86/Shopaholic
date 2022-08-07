import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"
import {API} from '../config.js';


const ItemContext = React.createContext()


function ItemProvider({children}) {
    const [item, setItem] = useState();
    const [itemList, setItemList] = useState([]);
    const [savedItem, setSavedItem] = useState()
    const [orderedItems, setOrderedItems] = useState([]);
    const [reorderList, setReorderList] = useState([]);
    const {setMessage} = useContext(MessageContext);

    const getItem = useCallback(async (productID) => { 
        try {
            const resp = await fetch('https://amazon24.p.rapidapi.com/api/product/' + productID + '?country=US', API)
             if (resp.status === 200) {
                const data = await resp.json() 
                setItem(data)
             } else {
                setMessage({message: "No items available", color: 'red'})
             }
        } catch (e) {
           
        }
    }, [setMessage])

    const getSavedItem = useCallback(async (id) => { 
        try {
            const resp = await fetch(`/api/v1/items/${id}`)
             if (resp.status === 200) {
                const data = await resp.json() 
                setSavedItem(data)
             } else {
                setMessage({message: "No items available", color: 'red'})
             }
        } catch (e) {
           
        }
    }, [setMessage])

    const getBestSellers = (category) => { 
 
           fetch('https://amazon24.p.rapidapi.com/api/bsr/' + category + '?page=1', API)
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
                    "product_id": newItem.product_id,
                    "item_name": newItem.product_title,
                    "image": newItem.product_main_image_url,
                    "price": newItem.app_sale_range.min,
                    "rating": newItem.rating
                })
            })
            if (resp.status === 201) {
                const data = await resp.json()
                setItem(data)
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }
    
        } catch(e) {
            setMessage({message: e.message, color: "red"})
        }
    }

    return (
        <ItemContext.Provider value={{item, itemList, setItem, setItemList, getItem, getBestSellers, createItem, orderedItems, setOrderedItems, savedItem, setSavedItem, getSavedItem}}>
            {children}
        </ItemContext.Provider>
    )

    }

    export {ItemContext, ItemProvider}