import React from 'react';
import './App.css';
import './css/cases.css';
import HeaderNav from './components/navbar'
import HomePage from './components/HomePage';
import VaccineInfo from './components/vaccineData/VaccineInfo';
import CovidInfo from './components/cases/covidInfo';
import About from './components/about';
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
              <Route exact path ="/covidInfo" component= {CovidInfo} />
              <Route exact path ="/about" component= {About} />
          </Switch>
      </Router>
    
      
    </div>
  );
}

export default App;
