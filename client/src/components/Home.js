import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import HomeImg from '../images/brooke-lark-W1B2LpQOBxA-unsplash.jpg'


export default function Home() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${HomeImg})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={HomeImg}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Shopaholic
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Find all of your shopping needs in one place!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup/"
        sx={{ minWidth: 200 }}
      >
        Sign Up Now!
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover Our Amazing Products
      </Typography>
    </ProductHeroLayout>
  );
}


// https://www.itl.cat/pngfile/big/165-1655864_e-commerce-px-shopping-cart.jpg