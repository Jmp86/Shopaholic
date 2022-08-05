import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"
import {API} from '../config.js';


const ItemContext = React.createContext()


function ItemProvider({children}) {
    const [item, setItem] = useState();
    const [itemList, setItemList] = useState([]);
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
    }, [])

    const getBestSellers = (category) => { 
 
           fetch('https://amazon24.p.rapidapi.com/api/bsr/' + category + '?page=1', API)
                .then(r => r.json())
                .then(data => {
                    setItemList({data})
            })
        }

    return (
        <ItemContext.Provider value={{item, itemList, setItem, setItemList, getItem, getBestSellers}}>
            {children}
        </ItemContext.Provider>
    )

    }

    export {ItemContext, ItemProvider}