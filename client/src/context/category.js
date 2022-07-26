import React, {useState, useContext, useEffect, useCallback} from "react"
import {MessageContext} from "../context/message"
import {useHistory} from 'react-router-dom'


const CategoryContext = React.createContext()


function CategoryProvider({children}) {
    const [category, setCategory] = useState([]);
    const {setMessage} = useContext(MessageContext)

    // const getCart = useCallback(async () => { 
    //     try {
    //         const resp = await fetch('/api/v1/carts/' + user.cart.id)
    //          if (resp.status === 200) {
    //             const data = await resp.json() 
    //             console.log(data)
    //             setCart({data})
    //          } 
    //     } catch (e) {
    //         setMessage({message: "No items to display", color: "red"})
    //     }
    // }, [setMessage, user.cart.id])

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
          category: 'electronics',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: "Men's Clothing",
          category: 'fashion-mens',
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
          category: 'automotive',
        },
        {
          id: 6,
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Computers',
          category: 'computers',
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
          category: 'lawngarden',
        },
        {
          id: 9,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Sports Equipment',
          category: 'sporting',
        },
        {
          id: 10,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: "Home & Kitchen",
          category: 'garden',
        },
        {
          id: 11,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: "Office Products",
          category: 'office-products',
        },
        {
          id: 12,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: "Pet Supplies",
          category: 'pets',
        },
        {
          id: 13,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: "Beauty & Personal Care",
          category: 'beauty',
        },
        {
          id: 14,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: "Video Games",
          category: 'videogames',
        }
      ];

    return (
        <CategoryContext.Provider value={{category, categoryData}}>
            {children}
        </CategoryContext.Provider>
    )

    }

    export {CategoryContext, CategoryProvider}