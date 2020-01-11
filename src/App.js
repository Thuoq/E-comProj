import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/shop.components'

import HomePage from './pages/homepage/homepage.components';
import Header from './components/Header/Header.components';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth} from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      //console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
      return (
        <div>
           <Header currentUser = {this.state.currentUser}/>
          <Switch>
          	<Route exact path= '/' component = {HomePage}/>
           	<Route  path= '/shop' component = {ShopPage}/>
           	<Route  path= '/signIn' component = {SignInAndSignUp}/>
          </Switch>
        </div>
      );
    }

  }

export default App;
