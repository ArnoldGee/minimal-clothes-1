import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'
import HomePage from './pages/homepage/homepage.component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/*Switch means that, the moment it finds a match, it does not render anything else inside the tag.*/}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
