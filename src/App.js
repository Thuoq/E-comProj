import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/shop.components'

import HomePage from './pages/homepage/homepage.components';
import Header from './components/Header/Header.components';


function App() {
  return (
    <div>
       <Header/>
      <Switch>
      	<Route exact path= '/' component = {HomePage}/>
       	<Route  path= '/shop' component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
