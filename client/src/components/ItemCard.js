import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from './Button'
import {useHistory} from 'react-router-dom'
import {ItemContext} from '../context/item'
import { useContext } from 'react';

const ItemCard = ({item}) => {
  const {getItem} = useContext(ItemContext)
  const history = useHistory()

    const handleClick = () => {
      // console.log(item)
    getItem(item.product_id)  
    history.push("/item/" + item.id);
}

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
        <CardActions>
            {item.reviews}
          <Button size="small" >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
}

export default ItemCard;
