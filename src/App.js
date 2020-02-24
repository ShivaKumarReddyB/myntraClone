import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage/HomePage';

import ShopPage from './pages/Shop/ShopPage';
import HeaderComponent from './components/header/header';
import SigninAndSignOut from './pages/SigninAndSignout/SigninAndSignout';
import {auth} from './firebase/firebase.utli';
// import { NULL } from 'node-sass';


const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)



class App extends React.Component {
 constructor(){
   super()
   this.state={
      currentUser:null

   }
 }
  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  render(){
  return (
  <div>
    <HeaderComponent/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SigninAndSignOut}/>
      <Route path='/hats' component={HatsPage}/>
    </Switch>
  </div>
  );
  }
}

export default App;
