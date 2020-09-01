import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/*Switch means that, the moment it finds a match, it does not render anything else inside the tag.*/}
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
