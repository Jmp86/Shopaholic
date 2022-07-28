import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {useHistory} from 'react-router-dom'
import React, {useState, useContext} from "react"
import {ItemContext} from '../context/item'
import {CategoryContext} from '../context/category'



const CategoryCard = ({ category }) => {
  const {getBestSellers} = useContext(ItemContext);
  const {categoryData} = useContext(CategoryContext);
  const history = useHistory()



  const handleClick = (cat) => {
    getBestSellers(cat)
    history.push('/category/' + cat)
  }

    return (
      <Box sx={{ width: 'auto', height: 'auto', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {categoryData.map((cat) => (
          <ImageListItem key={cat.id} className="categoryImg">
            <img
              onClick={() => handleClick(cat.category)}
              src={`${cat.img}?w=248&fit=crop&auto=format`}
              srcSet={`${cat.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={cat.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={cat.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    );
  }

export default CategoryCard;