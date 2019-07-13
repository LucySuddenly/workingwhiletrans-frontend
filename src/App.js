import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/search.js'
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      results: []
    }
  }

  updateSearchResults = (json) => {
    this.setState({
      results: json
    })
  }


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
          <Route exact path="/" render={()=>(<Search updateSearchResults={this.updateSearchResults}/>)}/>
        </Switch>
      </Router>
      </>
      )
  };
}

export default App;
