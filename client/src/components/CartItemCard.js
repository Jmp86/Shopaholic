import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function CartItemCard({item}) {
    // const [user, setUser] = useState(null);
      //   const handleClick = () => {
//     history.push("/item/" + item.id);
// }
console.log(item)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start" key={item.id}>
        <ListItemAvatar>
          <Avatar alt={item.product_name} src={item.product_main_image_url} />
        </ListItemAvatar>
        <ListItemText
          primary={item}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item}
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

    </List>
  );
}
