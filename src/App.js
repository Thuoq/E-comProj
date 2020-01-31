import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/shop.components';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.components';
import Header from './components/Header/Header.components';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth, createUserProfileDocment } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action'

class App extends Component {

    unsubscribeFromAuth = null;
    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            //console.log(userAuth);
            //createUserProfileDocment(userAuth);
            //console.log( await createUserProfileDocment(userAuth));
            if (userAuth) {
                const userRef = await createUserProfileDocment(userAuth);

                userRef.onSnapshot(snapShot => {
                    //console.log(snapShot.data());
                    setCurrentUser({

                        id: snapShot.id,
                        ...snapShot.data()

                    })
                })
                //console.log(this.state)
            } else {
                setCurrentUser(userAuth);
            }


        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
        //console.log(this.unsubscribeFromAuth)
    }
    render() {
        return (
            <div>
           <Header/>
          <Switch>
            <Route exact path= '/' component = {HomePage}/>
            <Route  path= '/shop' component = {ShopPage}/>
            <Route  path= '/signIn' component = {SignInAndSignUp}/>
          </Switch>
        </div>
        );
    }

}
const mapDispacthToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispacthToProps)(App);