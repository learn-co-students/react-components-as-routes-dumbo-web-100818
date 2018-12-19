import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class NavBar extends Component {



  render() {
    const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
    return (
      <div>
      <Navlink
        to="/"
        exact
        style={link}
        activeStyle={{
        background: 'red'
      }}>
        Home</Navlink>
      <Navlink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}>
        About</Navlink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'pink'
        }}>
          Login</NavLink>
      </div>
    );
  }

}

export default NavBar;
