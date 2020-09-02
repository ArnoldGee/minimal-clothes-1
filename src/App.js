import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/homepage.component';

import {auth} from "./firebase/firebase.utils"

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/*Switch means that, the moment it finds a match, it does not render anything else inside the tag.*/}
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
