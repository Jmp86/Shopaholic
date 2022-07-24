import React from 'react';
import CategoryCard from '../components/CategoryCard';
// import {ItemContext} from '../context/item';
// import {useContext, useState, useEffect, useCallback} from 'react';
// import {MessageContext} from "../context/message";
// import {categories} from '../config';

const ShopByCategory = () => {
    // const {getCategories} = useContext(ItemContext);
    // const [apiCategories, setapiCategories] = useState([]);
    // const {setMessage} = useContext(MessageContext)

    return (
        <div>
            <h2>Select a category to begin shopping</h2>
            <CategoryCard/>
            {/* {post.reviews ? post.reviews.map(review => <ReviewTile key={review.id} review={review} deleteReview={deleteReview}/>) : null} */}
        </div>
    );
}

export default ShopByCategory;
