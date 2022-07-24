import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { CartOutline } from 'mdi-material-ui'
import {NavLink} from 'react-router-dom'
import {UserContext} from "../context/user"
import {useContext} from "react"

const style = {
    align: "center",
    fontSize: "20px",
    width: "12%",
    margin: "auto",
    padding: "1rem",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    verticalAlign: "center"
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navigation() {
    const {user} = useContext(UserContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            {user ? (
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Welcome {user.data.firstname}!
              </Typography>
            ) : (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
              Welcome to Shopaholic!
           </Typography>
            )}   
           <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "whitesmoke"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
             <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "whitesmoke"
            }}
                exact
                style={style}
                to="/shop"
            >Shop</NavLink>
                {user ? (
                <>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "whitesmoke"
                    }}
                        exact
                        style={style}
                        to={"/profile/" + user.data.id}
                    >Profile</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "whitesmoke"
                    }}
                        exact
                        style={style}
                        to="/logout"
                    >Log Out</NavLink>
                    {/* <Navlink
                        exact
                        to={"/cart/" + cart.data.user_id}
                    > */}
                      <CartOutline/>
                      {/* </Navlink> */}
                </>
                ) : (
                    <>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "whitesmoke"
                        }}
                            exact
                            style={style}
                            to="/login"
                        >Log In</NavLink>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "whitesmoke"
                        }}
                            exact
                            style={style}
                            to="/signup"
                        >Sign Up</NavLink>
                    </>
                )}




          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}