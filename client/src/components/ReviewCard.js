import * as React from 'react';
import {useContext} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {UserContext} from '../context/user'
import BasicRating from './BasicRating'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ReviewCard({review, handleDelete, index}) {
    const {user} = useContext(UserContext)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary"component="span" gutterBottom>
        {review.review}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" component="span">
        <BasicRating value={review.rating}/><br/>
        </Typography>
        <Typography variant="body2" component="span">
        Reviewed by {user.data.firstname}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleDelete(review.id, index)} size="small">Delete Review</Button>
      </CardActions>
    </Card>
  );
}