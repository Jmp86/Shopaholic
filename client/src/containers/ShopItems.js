import React, {useContext} from "react";
import ItemCard from '../components/ItemCard';
import {ItemContext} from "../context/item";

const ShopItems = () => {
    const {itemList} = useContext(ItemContext);

    const renderItems = itemList.data?.map(item => <ItemCard key={item.id} item={item}/> )
    

    return !itemList ? (
        <h1>Loading...</h1>
    ) : (
        <div className ='table'>    
         
            {renderItems}
       </div> 

    );
}

export default ShopItems;
