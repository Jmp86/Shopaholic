import * as React from "react"
import appliances from "../images/appliances.jpg"
import electronics from "../images/electronics1.jpg"
import beauty from "../images/beauty.jpg"
import fashion from "../images/fashion.jpg"
import grocery from "../images/grocery.jpg"
import mobileapps from "../images/mobileapps.jpg"
import movies from "../images/movies.jpg"
import office from "../images/office.jpg"
import pharmacy from "../images/pharmacy.jpg"
import software from "../images/software.jpg"
import toysandgames from "../images/toysandgames.jpg"
import videogames from "../images/videogames.jpg"
import artsandcrafts from "../images/artsandcrafts.jpg"
import handmade from "../images/handmade.jpg"
import {useState} from "react"


const CategoryContext = React.createContext()


function CategoryProvider({children}) {
  const [category, setCategory] = useState("")


    const categoryData = [
        {
          id: 1,
          img: `${appliances}`,
          title: 'Appliances',
          category: 'appliances',
        },
        {
          id: 2,
          img: `${beauty}`,
          title: "Beauty & Personal Care",
          category: 'beauty',
        },
        {
          id: 3,
          img: `${electronics}`,
          title: "Electronics",
          category: 'electronics',
        },
        {
          id: 4,
          img: `${mobileapps}`,
          title: "Apps",
          category: 'mobile-apps',
        },
        {
          id: 5,
          img: `${artsandcrafts}`,
          title: 'Arts & Crafts',
          category: 'arts-crafts',
        },
        {
          id: 6,
          img: `${handmade}`,
          title: 'Handmade',
          category: 'handmade',
        },
        {
          id: 7,
          img: `${fashion}`,
          title: 'Clothing & Accessories',
          category: 'fashion',
        },
        {
          id: 8,
          img: `${movies}`,
          title: "Movies & TV",
          category: 'movies-tv',
        },
        {
          id: 9,
          img: `${grocery}`,
          title: 'Grocery',
          category: 'grocery',
        },
        {
          id: 10,
          img: `${pharmacy}`,
          title: "Pharmacy & Cleaning",
          category: 'industrial',
        },
        {
          id: 11,
          img: `${office}`,
          title: "Office Products",
          category: 'office-products',
        },
        {
          id: 12,
          img: `${software}`,
          title: "Software",
          category: 'software',
        },
        {
          id: 13,
          img: `${videogames}`,
          title: "Video Games",
          category: 'videogames',
        },
        {
          id: 14,
          img: `${toysandgames}`,
          title: "Toys & Games",
          category: 'toys-and-games',
        }
      ];

    return (
        <CategoryContext.Provider value={{categoryData, category, setCategory}}>
            {children}
        </CategoryContext.Provider>
    )

    }

    export {CategoryContext, CategoryProvider}