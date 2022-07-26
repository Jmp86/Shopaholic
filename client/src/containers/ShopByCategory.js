import CategoryCard from '../components/CategoryCard';
import {useHistory} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import {MessageContext} from "../context/message";
import {CategoryContext} from '../context/category';

const ShopByCategory = () => {
    const {categoryData} = useContext(CategoryContext);
    const {setMessage} = useContext(MessageContext);
 

    return (
        <div>
            <h2>Select a category to begin shopping</h2>
            {categoryData ? categoryData.map(cat => <CategoryCard key={cat.id} category={cat}/>) : null}
        </div>
    );
}

export default ShopByCategory;
