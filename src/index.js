import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import About from './About';
import Navbar from './Navbar'



ReactDOM.render((
  <Router>
  <React.Fragment>
    <Route path="/" component={Navbar}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Login" component={Login}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
