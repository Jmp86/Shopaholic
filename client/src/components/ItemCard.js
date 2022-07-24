import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ItemCard = ({item}) => {

  //   const handleClick = () => {
//     history.push("/item/" + item.id);
// }

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image='https://source.unsplash.com/random'
            alt="random img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.docs[0].product_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
}

export default ItemCard;
