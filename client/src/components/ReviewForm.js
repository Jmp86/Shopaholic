import React, { useState, useContext } from "react";
import {MessageContext} from '../context/message'
import {ReviewContext} from '../context/review'
import {ItemContext} from '../context/item'



const ReviewForm = ( {setShowReviewForm, id} ) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const {setMessage} = useContext(MessageContext);
  const {reviews} = useContext(ReviewContext);
  const {item} = useContext(ItemContext);

  console.log(item)
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
        item_id: item.data.id
      }),
    })
    .then(r => r.json())
    .then(data => console.log(data))
     setShowReviewForm(false)
  }
    // reviews.data.push(data)
  return (
          <div className="reviewForm">
            <form className="tile" onSubmit={handleSubmit}>
                <h2>Review This Product</h2>
                <label>Review:</label><br/>
                <textarea type="text" name="review" value={review} onChange={(e) => setReview(e.target.value)}/>
                <br/>
                <label>Rate This Product:</label><br/>
      
                <br/>
                <input className="submit" type="submit"/>
            </form>
        </div>
       
  )
}

export default ReviewForm;