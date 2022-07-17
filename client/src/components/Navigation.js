import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import {NavLink} from 'react-router-dom'
import {UserContext} from "../context/user"
import {useContext} from "react"

// const style = {
//     width: "60%",
//     margin: "5% 0 1%",
//     padding: "1em",
//     textDecoration: "none",
//     color: "black",
//     backgroundColor: "rgb(2555, 120, 44)",
//     fontWeight: "bold",
//     verticalAlign: "center"
// }

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

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SHOPAHOLIC
          </Typography>

           <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
//                 style={style}
                to="/"
            >Home</NavLink>
             <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
//                 style={style}
                to="/posts"
            >Posts</NavLink>
                {user ? (
                <>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
//                         style={style}
                        to="/posts/new"
                    >New Post</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
//                         style={style}
                        to="/profile"
                    >Profile</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
//                         style={style}
                        to="/signout"
                    >Sign Out</NavLink>
                </>
                ) : (
                    <>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "red"
                        }}
                            exact
//                             style={style}
                            to="/login"
                        >Login</NavLink>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "red"
                        }}
                            exact
//                             style={style}
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