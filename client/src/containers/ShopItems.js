import React, {useState, useContext, useEffect} from "react";
import ItemCard from '../components/ItemCard';
import {ItemContext} from "../context/item";
import {useParams} from 'react-router-dom';
import {API} from '../config'

const ShopItems = () => {
    const {category} = useParams()
    const {items} = useContext(ItemContext);
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        if (!items) {
            fetch(`https://amazon24.p.rapidapi.com/api/bsr/${category}?page=1`, API)
            .then(resp => {
                if (resp.status === 200) {
                    resp.json()
                    .then(items => setItemList(items))
                }
                //  else {
                //     resp.json()
                //     .then(errorObj => handleError(errorObj.error))
                // }
            })
            // .catch(error => handleError(error))
        }
    }, [category, items])


    const finalItems = items ? items : itemList
    const renderItems = finalItems?.map(item => <ItemCard key={item.id} item={item}/> )
    
 
    console.log(items)
    return (
        <div>   
            {renderItems}
        </div>
    );
}

export default ShopItems;
