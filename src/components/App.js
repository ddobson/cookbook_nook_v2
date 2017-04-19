import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import SignUp from './SignUp';

import AuthService from '../services/AuthService';

const authService = new AuthService();

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };

    this.handleAuthAction = this.handleAuthAction.bind(this);
  }

  handleAuthAction(action, data) {
    return authService.handleAuth(action, data);
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navigation/>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/sign-up" render={() => <SignUp handleSignUp={ this.handleAuthAction }/>}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
