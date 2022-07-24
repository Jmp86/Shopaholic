import React from 'react';
import CategoryCard from '../components/CategoryCard';
import {ItemContext} from '../context/item';
import {useContext, useState, useEffect, useCallback} from 'react';
import {MessageContext} from "../context/message";
import {categories} from '../config';

const ShopByCategory = () => {
    // const {getCategories} = useContext(ItemContext);
    const [apiCategories, setapiCategories] = useState([]);
    const {setMessage} = useContext(MessageContext)

    useEffect(() => { 
            fetch('https://amazon24.p.rapidapi.com/api/category?country=US', categories)
            .then(r => r.json())
            .then(setapiCategories)
        // } catch (e) {
        //     setMessage({message: "No items to display", color: "red"})
        // }
    }, [])
    console.log(apiCategories)
    return (
        <div>
            <h1>Select a category to begin shopping</h1>
            {apiCategories ? apiCategories.map(category => <CategoryCard key={category.id} category={category}/>) : null}
            {/* {post.reviews ? post.reviews.map(review => <ReviewTile key={review.id} review={review} deleteReview={deleteReview}/>) : null} */}
        </div>
    );
}

export default ShopByCategory;
