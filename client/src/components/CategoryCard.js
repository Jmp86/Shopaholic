import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
    {
      img: 'https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=612x612&w=0&h=c5rP2tqv0Uck6zm21hBYhEyVy9EBAA7C5VGI4sgfmzo=',
      title: 'Appliances',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i5.walmartimages.com/asr/89423986-7678-471d-9b08-f7aa4569f6f3.27b8f54d62fc40f47b5e6b1cea4f4d1a.jpeg',
      title: "TV's",
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: "Men's Clothing",
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: "Women's Clothing",
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Jewelry',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Gaming',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Phones',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Tablets',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Sports Equipment',
      rows: 2,
      cols: 2,
    }
  ];

const CategoryCard = ({category}) => {

    return (
        <ImageList sx={{ width: 'auto', height: 800 }}>
        <ImageListItem key="Subheader" cols={2}>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

export default CategoryCard;