import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useHistory} from 'react-router-dom'
import {ItemContext} from '../context/item'
import {useContext} from 'react';


const ItemCard = ({item}) => {
  const {getItem} = useContext(ItemContext)
  const history = useHistory()


    const handleClick = () => {
    getItem(item.id)  
    history.push({
      pathname: "/items/" + item.id,
      state: {detail: item}
    });
}


    return (
      
        <Card sx={{ maxWidth: 300 }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={item.image}
            alt="random img"
          />
          <CardContent>
            <Typography gutterBottom variant="span" component="span">
            {item.item_name}
            </Typography>
            <Typography variant="span" color="text.secondary">
            
            </Typography>
          </CardContent>
        </CardActionArea>
        <h4>${item.price}</h4>
      </Card>
    );
}

export default ItemCard;
