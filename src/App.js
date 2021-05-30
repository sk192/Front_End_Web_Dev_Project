import React from "react";
import "./App.css";
import "./css/cases.css";
import HeaderNav from "./components/navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import VaccineInfo from "./components/vaccineData/barchart";
import CovidInfo from "./components/cases/covidInfo";
import CountryView from "./components/cases/countryView";
import About from "./components/about";
import Footer from "./components/footer.jsx";
import  VaccineCompany from './components/vaccineData/vaccineManufacture.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/vaccination" component={VaccineInfo} />
            <Route exact path="/covidInfo" component={CovidInfo} />
            <Route exact path="/countryView/:countryName" component={CountryView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/vaccineCompany" component={VaccineCompany} />
                     
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
