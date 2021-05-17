import React from 'react';
import './App.css';
import HeaderNav from './components/navbar'
import HomePage from './components/HomePage';
import VaccineInfo from './components/vaccineData/VaccineInfo';
import CovidInfo from './components/cases/covidInfo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bar from './components/vaccineData/barchart';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
            <HeaderNav />
            <Switch>
                <Route exact path ="/" component= {HomePage} />
                <Route exact path ="/vaccination" component= {VaccineInfo} />
                <Route exact path ="/covidInfo" component= {CovidInfo} />
            </Switch>
            
        </Router>
      </div>
    </div>
  );
}

export default App;
