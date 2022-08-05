import React, {useState, useContext} from "react";
import ItemCard from '../components/ItemCard';
import {ItemContext} from "../context/item";
import {MessageContext} from '../context/message'
import {useParams} from 'react-router-dom';
import Loader from '../components/Loader'

const ShopItems = () => {
    const {itemList} = useContext(ItemContext);

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
