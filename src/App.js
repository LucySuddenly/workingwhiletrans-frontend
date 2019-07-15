import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/search.js'
import NewCompany from './components/newCompany.js'
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {

  render() {
    return(

      <>
      <Navbar collapseOnSelect expand="md" sticky="top" bg="success" variant="dark">
        <Navbar.Brand href="/">
          Working While Trans
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" render={()=>(<Search/>)}/>
          <Route exact parth="/companies/new" render={() =>(<NewCompany/>)}/>
        </Switch>
      </Router>
      </>
      )
  };
}

export default App;
