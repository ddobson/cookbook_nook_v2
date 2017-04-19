import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

import '../styles/Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <img src={logo} className="logo" alt="cookbook-nook-logo" />
        <Menu right>
          <div className="nav-item">
            <NavLink to="sign-up">Sign Up</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="sign-in">Sign In</NavLink>
          </div>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
