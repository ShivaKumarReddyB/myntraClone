import React from "react";
import { Switch, Route } from "react-router-dom";
import {connect }from 'react-redux';

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import HeaderComponent from "./components/header/header";
import SigninAndSignOut from "./pages/SigninAndSignout/SigninAndSignout";
import { auth, createUserProfileDocument } from "./firebase/firebase.utli";
import {setCurrentUser} from './redux/user/user.action'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   };
  // }
  unsubcribeFormAuth = null;
  componentDidMount() {
    const { setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

     setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubcribeFormAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent  />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignOut} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default  connect(null,mapDispatchToProps)(App);
