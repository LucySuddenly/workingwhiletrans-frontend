import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/search.js'
import NewCompany from './components/newCompany.js'
import CompanyShow from './components/companyShow.js'
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
          <Route exact path="/companies/new" render={() =>(<NewCompany/>)}/>
          <Route exact path="/companies/:id" render={() => (<CompanyShow {...this.props} />)}/>
        </Switch>
      </Router>
      </>
      )
  };
}

export default App;
