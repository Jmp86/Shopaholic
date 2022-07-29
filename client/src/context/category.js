import * as React from "react"




const CategoryContext = React.createContext()


function CategoryProvider({children}) {


    const categoryData = [
        {
          id: 1,
          img: 'https://imageio.forbes.com/specials-images/imageserve/615b7a2d10f14c6d90c57d56/Small-appliances-on-a-kitchen-countertop-/960x0.jpg?format=jpg&width=960',
          title: 'Appliances',
          category: 'appliances',
        },
        {
          id: 2,
          img: 'https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/01/refurbished_tvs_-_box_lg.jpg?itok=sHYbRa8I',
          title: "TV",
          category: 'tv',
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
        <CategoryContext.Provider value={{categoryData}}>
            {children}
        </CategoryContext.Provider>
    )

    }

    export {CategoryContext, CategoryProvider}