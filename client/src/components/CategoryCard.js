import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import {useHistory} from 'react-router-dom'
import React, {useState, useContext} from "react"
import {ItemContext} from "../context/item"

const categoryData = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=612x612&w=0&h=c5rP2tqv0Uck6zm21hBYhEyVy9EBAA7C5VGI4sgfmzo=',
      title: 'Appliances',
      category: 'appliances',
    },
    {
      id: 2,
      img: 'https://i5.walmartimages.com/asr/89423986-7678-471d-9b08-f7aa4569f6f3.27b8f54d62fc40f47b5e6b1cea4f4d1a.jpeg',
      title: "Electronics",
      category: "electronics",
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: "Men's Clothing",
      category: "fashion-mens",
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: "Women's Clothing",
      category: 'fashion-womens',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Automotive',
      category: "automotive",
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Computers',
      category: "computers",
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Phones',
      category: 'mobile',
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: "Garden & Outdoor",
      category: "lawngarden",
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Sports Equipment',
      category: "sporting",
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: "Home & Kitchen",
      category: "garden",
    },
    {
      id: 11,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: "Office Products",
      category: "office-products",
    },
    {
      id: 12,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: "Pet Supplies",
      category: "pets",
    },
    {
      id: 13,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: "Beauty & Personal Care",
      category: "beauty",
    },
    {
      id: 14,
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: "Video Games",
      category: "videogames",
    }
  ];


const CategoryCard = () => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState(0);
  const history = useHistory()
  const {getItemsByCategory} = useContext(ItemContext)

  const handleClick = (e, categoryId) => {
    setId({categoryId})
    const filteredArray = categoryData.filter(function( obj ) {
      return obj.id === id});
      setCategory({filteredArray})
      console.log(id)
      // getItemsByCategory(category.category)
      // console.log(category)
      // console.log(id)
      // history.push("/category/" + id)
}


    return (
        <ImageList sx={{ width: 'auto', height: 800 }}>
        <ImageListItem key="Subheader" cols={2}>
        </ImageListItem>
        {categoryData.map((cat) => (
          <ImageListItem key={cat.id}>
            <img
              onClick={e => handleClick(e, cat.id)}
              src={`${cat.img}`}
              srcSet={`${cat.img}`}
              alt={cat.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={cat.title}
              subtitle={cat.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${cat.title}`}
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