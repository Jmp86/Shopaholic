import {useContext, useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {MessageContext} from '../context/message'
import {UserContext} from '../context/user'
import {CartContext} from '../context/cart'
import {CategoryContext} from '../context/category'
import {ItemContext} from '../context/item'
import BasicRating from './BasicRating';
import {useLocation, useParams, useHistory} from 'react-router-dom'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

const theme = createTheme();

export default function ItemProfile() {
    const {setMessage} = useContext(MessageContext);
    const {user} = useContext(UserContext);
    const {item} = useContext(ItemContext);
    const {category} = useContext(CategoryContext);
    const {cart} = useContext(CartContext);
    const location = useLocation();
    const history = useHistory();
    const {id} = useParams();
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [average, setAverage] = useState(0)
    const [updatedItem, setUpdatedItem] = useState({
      name: location.state.detail.item_name,
      image: location.state.detail.image,
      price: location.state.detail.price,
      rating: location.state.detail.rating,
      category: location.state.detail.category,
      reviews: location.state.detail.reviews
  });

  useEffect(() => {
    fetch(`/api/v1/items/${id}/average`)
    .then((r) => r.json())
    .then(average => setAverage(average)); 
    }, [id]);

    const getNewReview = (review) => {
      setUpdatedItem({
        ...updatedItem,
        reviews: [...updatedItem.reviews, review]
        })
    }

    const handleClick = () => {
      cart.data.items_in_cart.push(item)

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
          history.push(`/category/${category}`)
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
            <h2>{updatedItem.name}</h2><br/>
            <BasicRating value={parseFloat(average)}/> 
            <Box component="form" sx={{ mt: 1 }}>
              <h2>${updatedItem.price}</h2> 
              
              <Button
                onClick={handleClick}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add to cart
              </Button>
            </Box>
            <Box>
            {showReviewForm ? <ReviewForm  key={id} getNewReview={getNewReview} setShowReviewForm={setShowReviewForm}/> : <button className="reviewButton" onClick={(e) => setShowReviewForm(true)}>Review This Product</button>}
            </Box>
            <Box>
              {updatedItem.reviews ? updatedItem.reviews.map(review => <ReviewCard key={review.id} review={review}/>)  : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}