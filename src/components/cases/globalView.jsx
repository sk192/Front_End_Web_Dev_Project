import React, { Component } from "react";

export default class GlobalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gloab: {
        cases: {
          totalCases: 0,
          casesPerMil: 0,
        },
        recovered: {
          totalRecovered: 0,
          recoveryPercent: 0,
        },
        deaths: {
          totalDeaths: 0,
          deathsPerMil: 0,
        },
      },
      continent: {
        australia: {
          cases: 0,
          recovered: 0,
          deaths: 0,
          pop: 0,
        },
        america: {
          cases: 0,
          recovered: 0,
          deaths: 0,
          pop: 0,
        },
        europe: {
          cases: 0,
          recovered: 0,
          deaths: 0,
          pop: 0,
        },
        africa: {
          cases: 0,
          recovered: 0,
          deaths: 0,
          pop: 0,
        },
        asia: {
          cases: 0,
          recovered: 0,
          deaths: 0,
          pop: 0,
        }
    }
    };
  }

  calculateGlobalValues(data) {
    let g_cases = 0;
    let g_recovered = 0;
    let g_deaths = 0;
    let g_pop = 3607000000;
    
    let australia = [0, 0, 0 , 0];
    let america = [0, 0, 0, 0];
    let europe = [0, 0, 0, 0];
    let africa = [0, 0, 0, 0];
    let asia = [0, 0, 0, 0];
    const compState = { ...this.state };
    Object.entries(data).forEach((item) => {
      if(item[0] == 'Global'){
        compState.gloab.cases.totalCases = item[1].All.confirmed;
        compState.gloab.cases.casesPerMil = ((item[1].All.confirmed)/ (item[1].All.population))*1000000;

        compState.gloab.recovered.totalRecovered = item[1].All.recovered;
        compState.gloab.recovered.recoveryPercent = (item[1].All.recovered / item[1].All.confirmed)*100;

        compState.gloab.deaths.totalDeaths = item[1].All.deaths;
        compState.gloab.deaths.deathsPerMil = ((item[1].All.deaths)/(item[1].All.population))*1000000;
      }
      else{
        console.log(item[1].All);
      }
    });
    this.setState(compState);
    console.log(this.state);
  }

  componentDidMount() {
    let cases_URL = "https://covid-api.mmediagroup.fr/v1/cases";
    fetch(cases_URL)
      .then((res) => res.json())
      .then((data) => {
        this.calculateGlobalValues(data);
        // console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="globalView-body">
        <h3>Globe</h3>
      </div>
    );
  }
}
