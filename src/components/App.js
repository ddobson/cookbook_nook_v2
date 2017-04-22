import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Alert from './Alert';
import ChangePassword from './ChangePassword';
import Home from './Home';
import Navigation from './Navigation';
import SignUp from './SignUp';
import SignIn from './SignIn';

import AuthService from '../services/AuthService';
import CookbookApiService from '../services/CookbookApiService';

const authService = new AuthService();
const cbService = new CookbookApiService();

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      alertIsOpen: false,
      alertMessage: '',
      cookbooks: []
    };

    this.handleAuthAction = this.handleAuthAction.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
    this.setLoggedInStatus = this.setLoggedInStatus.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  // Lifecycle
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.validateUser();
    }

    cbService.getCookbooks()
      .then((response) => this.setState({ cookbooks: response.data.cookbooks }));
  }

  // Alerting
  setAlertMessage(alertIsOpen, alertMessage) {
    this.setState({
      alertIsOpen,
      alertMessage: (alertMessage || '')
    });
  }

  // User & Authentication
  validateUser() {
    const errorMsg = 'Something is wrong with your credentials. Please login again.';

    this.handleAuthAction('validate')
      .then(() => this.setLoggedInStatus(true))
      .catch(() => this.setAlertMessage(true, errorMsg));
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
          <Navigation
            isLoggedIn={ this.state.isLoggedIn }
            handleAuthAction= { this.handleAuthAction }
            setLoggedInStatus={ this.setLoggedInStatus }
          />
          <Alert
            alertIsOpen={ this.state.alertIsOpen }
            alertMessage={ this.state.alertMessage }
            setAlertMessage={ this.setAlertMessage }
          />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/sign-up" render={ () =>
              <SignUp
                alertIsOpen={ this.state.alertIsOpen }
                saveUserInfo={ this.saveUserInfo }
                handleAuthAction={ this.handleAuthAction }
                setAlertMessage={ this.setAlertMessage }
              />
            }/>
            <Route exact path="/sign-in" render={ () =>
              <SignIn
                alertIsOpen={ this.state.alertIsOpen }
                saveUserInfo={ this.saveUserInfo }
                handleAuthAction={ this.handleAuthAction }
                setAlertMessage={ this.setAlertMessage }
              />
            }/>
            <Route exact path="/change-password" render={ () =>
              <ChangePassword
                alertIsOpen={ this.state.alertIsOpen }
                saveUserInfo={ this.saveUserInfo }
                handleAuthAction={ this.handleAuthAction }
                setAlertMessage={ this.setAlertMessage }
              />
            }/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
