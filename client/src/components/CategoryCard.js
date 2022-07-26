import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import {useHistory} from 'react-router-dom'
import React, {useState, useContext} from "react"
import {ItemContext} from '../context/item'




const CategoryCard = ({ category }) => {
  const {getBestSellers} = useContext(ItemContext);
  const history = useHistory()



  const handleClick = () => {
    getBestSellers(category.category)
    history.push('/category/' + category.category)
  }

    return (
        <ImageList sx={{ width: 'auto', height: 800 }}>
        <ImageListItem key="Subheader" cols={2}>
        </ImageListItem>
          <ImageListItem key={category.id}>
            <img className='select-img'
              onClick={handleClick}
              src={`${category.img}`}
              srcSet={`${category.img}`}
              alt={category.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={category.title}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${category.title}`}
                >
                
                </IconButton>
              }
            />
          </ImageListItem>
      </ImageList>
    );
  }

export default CategoryCard;