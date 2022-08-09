import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { PencilOutline } from 'mdi-material-ui'
import Title from './Title';
import {UserContext} from "../context/user"
import {ReviewContext} from "../context/review"
import {useContext, useState, useEffect} from "react"
import UserUpdateForm from './UserUpdateForm'
import Orders from './Orders';
import ReviewCard from './ReviewCard'
import ReorderItems from './ReorderItems'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Shopaholic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const mdTheme = createTheme();

function Profile() {
    const {user} = useContext(UserContext);
    const {reviews, setReviews} = useContext(ReviewContext);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    // useEffect(() => {
    //   fetch(`/api/v1/reviews`)
    //   .then((r) => r.json())
    //   .then(data => setReviews(data)); 
    //   }, [setReviews]);

    const handleDelete = (id, index) => {
      reviews.data.splice(index, 1)
      console.log(reviews)
      fetch(`/api/v1/reviews/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(r => r.json())
 

  }

  return (
    
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <h1>{user.data.firstname}'s Account</h1>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            <Grid container spacing={3}>
              {/* User Edit */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'justify-content',
                  }}
                >
                 <Title>Edit your account information</Title>
                  {showUpdateForm ? <UserUpdateForm key={user.id} setShowUpdateForm={setShowUpdateForm} /> : <button className="updateButton" onClick={(e) => setShowUpdateForm(true)}><PencilOutline/></button>}   

                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'justify-content' }}>
                 <Orders/>
                </Paper>
              </Grid>
              {/* Reviews */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'justify-content' }}>
                 <Title>My Reviews</Title>
                 {reviews ? reviews.data.map((review, index) => <ReviewCard key={review.id} review={review} index={index} handleDelete={handleDelete}/>) : null}
                </Paper>
              </Grid>
                  {/* Reorder */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'justify-content' }}>
                  <Title>Order Again</Title>
                  {user ? user.data.items.map(item => <ReorderItems key={item.id} item={item}/>) : null}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <Profile />;
}
