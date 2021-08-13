import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages'
import VisitUsPage from './pages/visitus';


function App() {
  return (
    <Router >
      <Switch>
       
        <Route path="/" component={Home} exact />
        <Route path="/visitus" component={VisitUsPage} exact />
      </Switch>
      
    </Router>
  );
};

export default App;
