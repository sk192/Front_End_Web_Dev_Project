import React, { Component } from 'react';
import StatusCards from "./statusCardsContainer";
class CountryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: {
        totalCases: 0,
        casesPerMil: 0,
        totalRecovered: 0,
        recoveryPercent: 0,
        totalDeaths: 0,
        deathsPerMil: 0,
      },
      graphData: {
        casesDates: [],
        casesValues: [],
        recoveredDates: [],
        recoveredValues: [],
        deathsDates: [],
        deathsValues: [],
      },
    };
  }

  componentDidMount() {
    let cardData_URL = `https://covid-api.mmediagroup.fr/v1/cases?country=${this.props.match.params.countryName}`;
    fetch(cardData_URL)
      .then((res) => res.json())

      .then((data) => {
        console.log(data.All);
        const compState = { ...this.state };
        compState.cardData.totalCases = data.All.confirmed;
        compState.cardData.casesPerMil = Math.ceil(
          (data.All.confirmed / data.All.population) * 1000000
        );
        compState.cardData.totalRecovered = data.All.recovered;
        compState.cardData.recoveryPercent = Math.ceil(
          (data.All.recovered / data.All.confirmed) * 100
        );
        compState.cardData.totalDeaths = data.All.deaths;
        compState.cardData.deathsPerMil = Math.ceil(
          (data.All.deaths / data.All.population) * 1000000
        );
        this.setState(compState);
      });

    let dateData_URL = `https://covid-api.mmediagroup.fr/v1/history?country=${this.props.match.params.countryName}&status=confirmed`;
    fetch(dateData_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("confirmed");
        console.log(data.All.dates);
        // console.log(data.All.dates.keys);
      });
  }

  render() {
    console.log("inside country view ", this.props.match.params.countryName);
    return (
      <div>
        <StatusCards
          totalCases={this.state.cardData.totalCases}
          casesPerMil={this.state.cardData.casesPerMil}
          totalRecovered={this.state.cardData.totalRecovered}
          recoveryPercent={this.state.cardData.recoveryPercent}
          totalDeaths={this.state.cardData.totalDeaths}
          deathsPerMil={this.state.cardData.deathsPerMil}
        />
        <h3>Country View of {this.props.match.params.countryName}</h3>
      </div>
    );
  }
}
 
export default CountryView;


