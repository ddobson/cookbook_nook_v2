import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

import AuthService from '../services/AuthService';

const authService = new AuthService();

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };

    this.handleAuthAction = this.handleAuthAction.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.setLoggedInStatus = this.setLoggedInStatus.bind(this);
  }

  handleAuthAction(action, data) {
    return authService.handleAuth(action, data);
  }

  saveUserInfo(userData) {
    for (const key in userData.user) {
      localStorage.setItem(`${key}`, userData.user[key]);
    }

    this.setLoggedInStatus(true);
  }

  setLoggedInStatus(bool) {
    this.setState({ isLoggedIn: bool });
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navigation isLoggedIn={ this.state.isLoggedIn }
                      handleAuthAction= { this.handleAuthAction }
                      setLoggedInStatus={ this.setLoggedInStatus }
          />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/sign-up" render={ () =>
              <SignUp  saveUserInfo={ this.saveUserInfo } handleAuthAction={ this.handleAuthAction }/>
            }/>
          <Route exact path="/sign-in" render={ () =>
              <SignIn  saveUserInfo={ this.saveUserInfo } handleAuthAction={ this.handleAuthAction }/>
            }/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
