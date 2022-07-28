import '../App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import {UserContext} from '../context/user';
import Home from '../components/Home';
import ShopByCategory from '../containers/ShopByCategory';
import Navigation from '../components/Navigation';
import Notification from '../components/Notification';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Profile from '../components/Profile';
import Logout from '../components/Logout';
import Cart from './Cart'
import ShopItems from './ShopItems'
import ItemProfile from '../components/ItemProfile'


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
        <Route path="/item/:id">
            <ItemProfile setLoading={setLoading} isLoading={isLoading}/>
          </Route>
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

