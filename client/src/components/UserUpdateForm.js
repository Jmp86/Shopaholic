import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {UserContext} from '../context/user'
import {MessageContext} from '../context/message'
import {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const theme = createTheme();

const UserUpdateForm = ( {setShowUpdateForm} ) => {
    const {user, setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()
    const [userObj, setUserObj] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    const handleChange = ({target: {name, value}}) => {
        setUserObj({
            ...userObj,
            [name]: value
        })
    }

    useEffect(() => {
        setUserObj({
            firstname: user.data.firstname,
            lastname: user.data.lastname,
            email: user.data.email,
            password: user.data.password,
        })
    }, [user.data.firstname, user.data.lastname, user.data.email, user.data.password ])



  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/users/" + user.data.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "firstname": userObj.firstname,
        "lastname": userObj.lastname,
        "email": userObj.email,
        "password": userObj.password,
      }),
    })
    .then(r => r.json())
    .then(data => {
      if (data.errors) {
        setMessage(data.errors)
      } else {
        setShowUpdateForm(false)
        setUser(user)
      }
    })
  }

  const cancel = () => {
    setShowUpdateForm(false)
  }

  const handleDelete = () => {
    fetch("/api/v1/users/" + user.data.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      setMessage({message: "Sorry to see you go!", color: "yellow"})
      history.push('/')
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="firstname"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  value={userObj.firstname}
                  onChange={handleChange}
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  value={userObj.lastname}
                  onChange={handleChange}
                  autoComplete="lastname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userObj.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={userObj.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>

            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
        <Button
              onClick={handleDelete}  
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Delete Account
            </Button>
            <Link className='link' onClick={cancel} variant="body2">
                  Cancel
            </Link>
      </Container>
    </ThemeProvider>
  );
}

export default UserUpdateForm;