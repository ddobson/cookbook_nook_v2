import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../images/logo.svg';

import '../styles/Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.handleAuthAction('sign-out')
      .then(() => this.props.setLoggedInStatus(false))
      .then(() => localStorage.clear())
      .then(() => this.props.history.push('/'));
  }

  render() {
    const noAuthdMenu = (
      <div>
        <div className="nav-item">
          <NavLink to="sign-up">Sign Up</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="sign-in">Sign In</NavLink>
        </div>
      </div>
    );

    const authdMenu = (
      <div>
        <div className="nav-item">
          <NavLink to="change-password">Change Password</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="#" onClick={ this.handleClick }>Log Out</NavLink>
        </div>
      </div>
    );

    return (
      <div className="nav-bar">
        <NavLink to="/">
          <img src={logo} className="logo" alt="cookbook-nook-logo" />
        </NavLink>
        <Menu right isOpen={ false }>
          { this.props.isLoggedIn ? authdMenu : noAuthdMenu }
        </Menu>
      </div>
    );
  }
}

const NavigationWithRouter = withRouter(Navigation);

export default NavigationWithRouter;
