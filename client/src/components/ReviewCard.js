import * as React from 'react';
import {useContext} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Title from './Title';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {UserContext} from '../context/user'
import BasicRating from './BasicRating'


export default function ReviewCard({review, handleDelete, index}) {
    const {user} = useContext(UserContext)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="body2" component="span">
        Item Reviewed: {review.item_id}
        {/* {console.log(review.item_id)} */}
        {/* <Title>{review.item.item_name}</Title> */}
        </Typography><br/>
        <Typography sx={{ fontSize: 14 }} color="text.primary"component="span" gutterBottom>
        {review.review}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" component="span">
        <BasicRating value={review.rating}/><br/>
        </Typography>
        <Typography variant="body2" component="span">
        Reviewed by {review.user_id}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button onClick={() => handleDelete(review.id, index)} size="small">Delete Review</Button>
      </CardActions> */}
    </Card>
  );
}