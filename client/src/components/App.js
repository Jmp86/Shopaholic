import '../App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, { useEffect, useContext } from "react";
import {UserContext} from "../context/user"
import Home from '../containers/Home'
import ShopByCategory from "../containers/ShopByCategory";
import Navigation from './Navigation';
import Notification from './Notification';
import Login from './Login';
import SignUp from './SignUp';
import Profile from "./Profile";
import Logout from "./Logout";


function App() {

  const {getCurrentUser} = useContext(UserContext)

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  return (
    <div className='App'>
      <Router>
        <Notification/>
        <Navigation />
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          {/* <Route path="/item/:id">
            <ShopByCategory />
          </Route> */}
        <Route path="/shop">
            <ShopByCategory />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// {/* <Route index path='/orders' element={<Home/>}/>
// <Route index path='/orders/:id' element={<Home/>}/> */}
export default App;

