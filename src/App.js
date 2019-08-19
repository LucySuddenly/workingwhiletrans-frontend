import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/search.js'
import NewCompany from './components/newCompany.js'
import CompanyShow from './components/companyShow.js'
import ReviewShow from './components/reviewShow.js'
import Navbar from 'react-bootstrap/Navbar'
import Results from './components/results.js'


class App extends Component {
  constructor(){
    super()
    this.state={
        searchResults: []
    }
  }

  updateSearchResults = (results) => {
    this.setState({
      searchResults: results
    })
  }

  render() {
    return(

      <>
      <Navbar collapseOnSelect expand="md" sticky="top" bg="success" variant="dark">
        <Navbar.Brand href="/">
          Working While Trans
        </Navbar.Brand>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" render={()=>(<Search {...this.props} updateSearchResults={this.updateSearchResults}/>)}/>
          <Route exact path="/results" render={() =>(<Results {...this.props} searchResults={this.state.searchResults} />)} />
          <Route exact path="/companies/new" render={() =>(<NewCompany/>)}/>
          <Route exact path="/companies/:id" render={() => (<CompanyShow {...this.props} />)}/>
          <Route exact path="/reviews/:id" render={() => (<ReviewShow/>)}/>
        </Switch>
      </Router>
      </>
      )
  };
}

export default App;
