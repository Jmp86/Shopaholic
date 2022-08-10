import React, { useState, useContext } from "react";
import {MessageContext} from '../context/message'
import {ReviewContext} from '../context/review'
import {ItemContext} from '../context/item'
import {UserContext} from '../context/user'
import HoverRating from './HoverRating'



const ReviewForm = ( {setShowReviewForm, getNewReview} ) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const {setMessage} = useContext(MessageContext);
  const {reviews} = useContext(ReviewContext);
  const {item} = useContext(ItemContext);
  const {user} = useContext(UserContext);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        rating,
        item_id: item.id
      }),
    })
    .then(r => r.json())
    .then(data => {
        getNewReview(data)
        user.data.reviews.push(data)
        user.data.items.push(data.item)
    })
     setShowReviewForm(false)
    
  }


  const getStarValue = (value) => {
    setRating(value)
  }

  return (
          <div className="reviewForm">
            <form className="tile" onSubmit={handleSubmit}>
                <h2>Review This Product</h2>
                <label>Review:</label><br/>
                <textarea type="text" name="review" value={review} onChange={(e) => setReview(e.target.value)}/>
                <br/>
                <label>Rate This Product:</label><br/>
                <HoverRating name={rating} value={rating} getStarValue={getStarValue} onClick={(e) => setRating(e.target.value)}/>
                <br/>
                <input className="submit" type="submit"/>
            </form>
        </div>
       
  )
}

export default ReviewForm;