
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, { useContext } from "react";
import {UserContext} from "../context/user"
// import Home from './containers/Home'
import Header from './Header';
import Navigation from './Navigation';
import Notification from './Notification';
import SignIn from './SignIn';
import SignUp from './SignUp';


function App() {

  const {getCurrentUser} = useContext(UserContext)


  return (
    <div className='App'>
      <Router>
        <Notification/>
        
        <Navigation />
        <Header slogan="Start Shopping!" storename="Shopaholic"/>
        <Switch>
          {/* <Route path='/' element={<Home/>}/> */}
          {/* <Route index path='/items' element={<Home/>}/>
          <Route index path='/items/:id' element={<Home/>}/>
          <Route index path='/profile/:id' element={<Home/>}/> */}
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route index path='/login' element={<SignIn/>}/>
          {/* <Route index path='/orders' element={<Home/>}/>
          <Route index path='/orders/:id' element={<Home/>}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

