import {useContext, useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {ItemContext} from '../context/item'
import {MessageContext} from '../context/message'
import {UserContext} from '../context/user'
import {CartContext} from '../context/cart'
import BasicRating from './BasicRating';
import {useLocation} from 'react-router-dom'
const theme = createTheme();

export default function ItemProfile(props) {
    const {setMessage} = useContext(MessageContext);
    // const {item} = useContext(ItemContext);
    const {user} = useContext(UserContext);
    const {cart, getCart} = useContext(CartContext);
    const [updatedCart, setUpdatedCart] = useState([]);
    const location = useLocation()
    const [updatedItem, setUpdatedItem] = useState({
      name: location.state.detail.product_title,
      image: location.state.detail.product_main_image_url,
      price: location.state.detail.app_sale_range.min,
      rating: 0
  });

    useEffect(() => {
      getCart()
    }, [getCart])

    console.log(updatedItem)
    // console.log(updatedCart)
    console.log(cart)

    const handleClick = () => {
    cart.data.items_in_cart.push(updatedItem)

     const addItemToCart = async () => {
      try {
        const resp = await fetch(`/api/v1/carts/${user.data.cart.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
            "items_in_cart": cart.data.items_in_cart
          })
      })
      if (resp.status === 200) {
          const data = await resp.json()
          setMessage({message: "Item added to cart", color: "green"})
      } else {
          const errorObj = await resp.json()
          setMessage({message: errorObj.error, color: "red"})
      }

      } catch(e) {
          setMessage({message: e.message, color: "red"})
      }
    }
  addItemToCart()
  }


    // const index = location.state.detail.reviews.search(/[0-9]/);
    // const firstNum = Number(location.state.detail.reviews[index]);



return (

    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${updatedItem.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '50%',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2>{updatedItem.name}</h2>  
            <Box component="form" sx={{ mt: 1 }}>
              <h2>${updatedItem.price}</h2> 
              {/* <BasicRating value={firstNum}/> */}
              <Button
                onClick={handleClick}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  // ) : (
  //   <h2>
  //     Loading product ...
  //   </h2>
    
  );
}