import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import {useHistory} from 'react-router-dom'
import {ItemContext} from '../context/item'
import {useContext} from 'react';
import BasicRating from './BasicRating'


const ItemCard = ({item}) => {
  const {getItem} = useContext(ItemContext)
  const history = useHistory()

    const handleClick = () => {
    getItem(item.product_id)  
    history.push({
      pathname: "/item/" + item.product_id,
      state: {detail: item}
    });
}

  // const index = item.reviews.search(/[0-9]/);
  // const firstNum = Number(item.reviews[index]);

    return (
      
        <Card sx={{ maxWidth: 300 }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={item.product_main_image_url}
            alt="random img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.product_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.product_title}
            </Typography>
          </CardContent>
        </CardActionArea>
        {item.app_sale_range.min}
      </Card>
    );
}

export default ItemCard;
