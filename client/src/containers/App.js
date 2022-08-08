import '../App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { useEffect, useContext } from "react";
import {UserContext} from '../context/user';
import {CartContext} from '../context/cart';
import {OrderContext} from '../context/order';
import {ReviewContext} from '../context/review';
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
  const {cart, cartTotal, getCart, getTotal} = useContext(CartContext);
  const {getCurrentUser} = useContext(UserContext);
  const {orders, getOrders} = useContext(OrderContext);
  const {reviews, getReviews} = useContext(ReviewContext);

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  const loadCart = () => {
    if (cart) {
      return cart
     } else {
       getCart()
     }}

  const loadOrders = () => {
    if (orders) {
      return orders
    } else {
      getOrders()
    }}

    const loadReviews = () => {
      if (reviews) {
        return reviews
      } else {
        getReviews()
      }}

  // const loadCartTotal = () => {
  //   if (cartTotal) {
  //     return cartTotal
  //   } else {
  //     getTotal()
  //   }}

  // loadCartTotal()
  loadOrders()
  loadCart()
  loadReviews()

  return (
    <div className='App'>
      <Router>
        <Notification/>
        <Navigation />
        <Switch>
        <Route path="/items/:id">
            <ItemProfile/>
          </Route>
        <Route path="/cart/:id">
            <Cart />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/category/:category">
            <ShopItems/>
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


// <Route index path='/orders/:id' element={<Home/>}/> */}
export default App;

