import {useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {ItemContext} from '../context/item'
import Loader from '../components/Loader'


const theme = createTheme();

export default function ItemProfile({setLoading, isLoading}) {
    const {item} = useContext(ItemContext)

    const finalItem = item ? item : null
  
  return isLoading ? (
    <Loader/>
    ) : (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${finalItem.data.product_main_image_url})`,
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
            <h2>{finalItem.data.product_title}</h2>  

            <Box component="form" sx={{ mt: 1 }}>
              
              <h2>${finalItem.data.app_sale_price}</h2> 
              <h3>{finalItem.data.reviews}</h3> 

              <Button
                type="submit"
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
    
  );
}