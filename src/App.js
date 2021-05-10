import React from 'react';
import './App.css';
import HeaderNav from './components/navbar'
import HomePage from './components/HomePage';
import VaccineInfo from './components/VaccineInfo';
import CovidInfo from './components/CovidInfo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
          <HeaderNav />
          <Switch>
              <Route exact path ="/" component= {HomePage} />
              <Route exact path ="/vaccination" component= {VaccineInfo} />
              <Route exact path ="/world_map" component= {CovidInfo} />
          </Switch>
      </Router>
    
      
    </div>
  );
}

export default App;
