import '../App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import {UserContext} from '../context/user';
import Home from './Home';
import ShopByCategory from '../containers/ShopByCategory';
import Navigation from './Navigation';
import Notification from './Notification';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import Logout from './Logout';
import Cart from '../containers/Cart'
import ShopItems from '../containers/ShopItems'
import ItemProfile from './ItemProfile'

function App() {
  const [isLoading, setLoading] = useState(true)

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
        {/* <Route path="/item/:id">
            <ItemProfile />
          </Route> */}
        <Route path="/cart/:id">
            <Cart />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/category/:category">
            <ShopItems setLoading={setLoading} isLoading={isLoading}/>
          </Route>
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

