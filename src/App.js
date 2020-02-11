import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage/HomePage';

import ShopPage from './pages/Shop/ShopPage'
import HeaderComponent from './components/header/header'


// const HatsPage=()=>(
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )



function App() {
  return (
  <div>
    <HeaderComponent/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
    </Switch>
  </div>
  );
}

export default App;
