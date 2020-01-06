import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.components';

const HatsPage = () => (
		<div>
			<h1> HATS pages</h1>
		</div>

	)

function App() {
  return (
    <div>
      <Switch>
      	<Route exact path= '/' component = {HomePage}/>
       	<Route  path= '/shop/hats' component = {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
