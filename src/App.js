import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Staffs from './Components/Staffs'
import Schedule from './Components/Schedule'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Staffs} />
            <Route exact path='/:name' component={Schedule} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
