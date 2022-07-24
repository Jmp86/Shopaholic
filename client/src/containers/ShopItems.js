import React, {useState, useContext} from "react"
import ItemCard from '../components/ItemCard'
import {ItemContext} from "../context/item"
import {useHistory} from 'react-router-dom'

const ShopItems = () => {
    const {items} = useContext(ItemContext)

    return (
        <div>   
            {items ? items.map(item => <ItemCard key={item.id} item={item}/> ) : null}
        </div>
    );
}

export default ShopItems;
