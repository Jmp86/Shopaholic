import React, {useState, useContext, useEffect} from "react";
import ItemCard from '../components/ItemCard';
import {ItemContext} from "../context/item";
import {useParams} from 'react-router-dom';
import {API} from '../config'
import Loader from '../components/Loader'

const ShopItems = ({setLoading, isLoading}) => {
    const {category} = useParams();
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
                setLoading(false)
                console.log(items)
                //  else {
                //     resp.json()
                //     .then(errorObj => handleError(errorObj.error))
                // }
            })
            // .catch(error => handleError(error))
        }
    }, [category, setLoading, items])


    const finalItems = items ? items : itemList
    const renderItems = finalItems?.map(item => <ItemCard key={item.id} item={item}/> )
    
 
    console.log(items)
    return isLoading ? (
        <Loader/>
       ) : (
        <div className ='table'>    
            {renderItems}
       </div> 
    );
}

export default ShopItems;
