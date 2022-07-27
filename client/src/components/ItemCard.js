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
      
        <Card sx={{ maxWidth: 300 }}>
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
          <Button size="small" color="primary">
            {item.reviews}
          </Button>
        </CardActions>
      </Card>
    );
}

export default ItemCard;
