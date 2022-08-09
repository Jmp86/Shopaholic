import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import {useState, useContext} from "react";
// import {UserContext} from "../context/user";
// import {useParams} from 'react-router-dom';

export default function ReorderItems(item) {
    // const {user} = useContext(UserContext);


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt={item.item.item_name} src={item.item.image}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.item.item_name} secondary={item.item.price} />
      </ListItem>
    </List>
  );
}
