import React, {useState, useContext, useEffect} from "react";
import ItemCard from '../components/ItemCard';
import {ItemContext} from "../context/item";
import {MessageContext} from '../context/message'
import {useParams} from 'react-router-dom';
import {API} from '../config'
import Loader from '../components/Loader'

const ShopItems = ({setLoading, isLoading}) => {
    const {category} = useParams();
    const {itemList} = useContext(ItemContext);
    const [productList, setProductList] = useState([]);
    const {setMessage} = useContext(MessageContext);
    

    // useEffect(() => {
    //         fetch(`https://amazon24.p.rapidapi.com/api/bsr/${category}?page=1`, API)
    //         .then(resp => {
    //             if (resp.status === 200) {
    //                 resp.json()
    //                 .then(items => setProductList(items))
    //                 setLoading(false)
    //             } else {
    //                 setMessage({message: "Loading Items", color: "yellow"})
    //             }
    //         }) 
            
        
    // }, [category, setLoading, setMessage])


    // const finalItems = itemList ? itemList : null
    const renderItems = itemList.data?.map(item => <ItemCard key={item.product_title} item={item}/> )
    
    console.log(itemList)
    return !itemList ? (
        <Loader/>
    ) : (
        <div className ='table'>    
         
            {renderItems}
       </div> 

    );
}

export default ShopItems;
