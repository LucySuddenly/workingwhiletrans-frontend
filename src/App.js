import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/search.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={()=>(<Search/>)}/>
      </Switch>
    </Router>
  );
}

export default App;
