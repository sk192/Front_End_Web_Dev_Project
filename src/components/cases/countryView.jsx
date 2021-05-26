import React, { Component } from 'react';
import StatusCards from "./statusCardsContainer";
import CountryLinearGraph from "./countryLinearGraph";
import CountryGloabBarGraph from "./countryGloabBarGraph";
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
      graphDataValues: {
        labels: [],
        confirmedData: [],
        deathsData: [],
        recoveredData: [],
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
        if ((data.All.country === "US") & (data.All.recovered === 0)) {
          data.All.recovered = 26803096;
        }
        if ((data.All.country === "Sweden") & (data.All.recovered === 0)) {
          data.All.recovered = 917616;
        }
        if ((data.All.country === "Belgium") & (data.All.recovered === 0)) {
          data.All.recovered = 926877;
        }
        if (data.All.country === "United Kingdom") {
          data.All.recovered = 4299889;
        }
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

    let confirmed_dateData_URL = `https://covid-api.mmediagroup.fr/v1/history?country=${this.props.match.params.countryName}&status=confirmed`;
    fetch(confirmed_dateData_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("confirmed");
        console.log(data.All.dates);
        const compState1 = { ...this.state };
        compState1.graphDataValues.labels = Object.keys(data.All.dates)
          .reverse()
          .slice(80);
        compState1.graphDataValues.confirmedData = Object.values(
          data.All.dates
        ).reverse().slice(80);
        this.setState(compState1);
      });

      let deaths_dateData_URL = `https://covid-api.mmediagroup.fr/v1/history?country=${this.props.match.params.countryName}&status=deaths`;
      fetch(deaths_dateData_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log("deaths");
          console.log(data.All.dates);
          const compState2 = { ...this.state };
          compState2.graphDataValues.deathsData = Object.values(
            data.All.dates
          ).reverse().slice(80);
          this.setState(compState2);
        });

        let recovered_dateData_URL = `https://covid-api.mmediagroup.fr/v1/history?country=${this.props.match.params.countryName}&status=recovered`;
        fetch(recovered_dateData_URL)
          .then((res) => res.json())
          .then((data) => {
            console.log("recovered");
            console.log(data.All.dates);
            const compState3 = { ...this.state };
            compState3.graphDataValues.recoveredData = Object.values(
              data.All.dates
            )
              .reverse()
              .slice(80);
            this.setState(compState3);
          });    
  }

  render() {
    console.log("inside country view ", this.props);
    return (
      <div className="CountryView-body">
        <div className="countryViewPg-container">
          <div className="country-grid-item cgrid-item-1 CountryView-Head">
            <h2>
              Country View: <b>{this.props.match.params.countryName}</b>
            </h2>
          </div>

          <div className="country-grid-item cgrid-item-2 CountryView-StatusCards">
            <StatusCards
              totalCases={this.state.cardData.totalCases}
              casesPerMil={this.state.cardData.casesPerMil}
              totalRecovered={this.state.cardData.totalRecovered}
              recoveryPercent={this.state.cardData.recoveryPercent}
              totalDeaths={this.state.cardData.totalDeaths}
              deathsPerMil={this.state.cardData.deathsPerMil}
            />
          </div>
          <div className="country-grid-item cgrid-item-3">
            <h2 className="countryLineGraphHeading">
              <b>Country day-wise Covid Data</b>
            </h2>
          </div>
          <div className="country-grid-item cgrid-item-4">
            <h2 className="countryBarGraphHeading">
              <b>Country Vs Gloab Covid Data</b>
            </h2>
          </div>
          <div className="country-grid-item cgrid-item-5 CountryViewLineGraph">
            <CountryLinearGraph graphData={this.state.graphDataValues} />
          </div>
          <div className="country-grid-item cgrid-item-6 countryViewBarGraph">
            <CountryGloabBarGraph
              barGraphGloabData={this.props.location.state}
              barGraphCountryData={this.state.cardData}
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default CountryView;


