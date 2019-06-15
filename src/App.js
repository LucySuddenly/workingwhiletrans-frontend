import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
