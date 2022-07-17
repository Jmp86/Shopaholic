import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, { useEffect, useContext } from "react";
import {UserContext} from "./context/user"
import Home from './containers/Home'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';

function App() {

  const {getCurrentUser} = useContext(UserContext)

  useEffect(() => {
      getCurrentUser()
  }, [])


  return (
    <div className='App'>
      <Router>
        <Notification/>
        <Navigation />
        <Header slogan="Start Shopping!" storename="Shopaholic"/>
        <Switch>
          <Route path='/' element={<Home/>}/>
          {/* <Route index path='/items' element={<Home/>}/>
          <Route index path='/items/:id' element={<Home/>}/>
          <Route index path='/profile/:id' element={<Home/>}/> */}
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route index path='/login' element={<SignInSide/>}/>
          {/* <Route index path='/orders' element={<Home/>}/>
          <Route index path='/orders/:id' element={<Home/>}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

