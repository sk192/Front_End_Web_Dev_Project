import React, { Component } from "react";
import StatusCards from "./statusCardsContainer";
import RegionBarGraph from "./regionStatus-barGraph";
import RegionTableData from "./regionTableData";
import CountryDataTable from "./countryDataTable";

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
        pop: 0,
      },
      continent: {
        oceania: {
          cases: 0,
          casesPerMil: 0,
          recovered: 0,
          recoveryPercent: 0,
          deaths: 0,
          deathsPerMil: 0,
          pop: 0,
        },
        northAmerica: {
          cases: 0,
          casesPerMil: 0,
          recovered: 0,
          recoveryPercent: 0,
          deaths: 0,
          deathsPerMil: 0,
          pop: 0,
        },
        southAmerica: {
          cases: 0,
          casesPerMil: 0,
          recovered: 0,
          recoveryPercent: 0,
          deaths: 0,
          deathsPerMil: 0,
          pop: 0,
        },
        europe: {
          cases: 0,
          casesPerMil: 0,
          recovered: 0,
          recoveryPercent: 0,
          deaths: 0,
          deathsPerMil: 0,
          pop: 0,
        },
        africa: {
          cases: 0,
          casesPerMil: 0,
          recovered: 0,
          recoveryPercent: 0,
          deaths: 0,
          deathsPerMil: 0,
          pop: 0,
        },
        asia: {
          cases: 0,
          casesPerMil: 0,
          recovered: 0,
          recoveryPercent: 0,
          deaths: 0,
          deathsPerMil: 0,
          pop: 0,
        },
      },
      country: {
        countryData: [],
      },
    };
  }

  calculateGlobalValues(data) {
    let oceania = [0, 0, 0, 0];
    let southAmerica = [0, 0, 0, 0];
    let northAmerica = [0, 0, 0, 0];
    let europe = [0, 0, 0, 0];
    let africa = [0, 0, 0, 0];
    let asia = [0, 0, 0, 0];
    const compState = { ...this.state };

    Object.entries(data).forEach((item) => {
      if (item[0] === "Global") {
        compState.gloab.cases.totalCases = item[1].All.confirmed;

        compState.gloab.cases.casesPerMil = Math.ceil(
          (item[1].All.confirmed / item[1].All.population) * 1000000
        );

        compState.gloab.recovered.totalRecovered = item[1].All.recovered;

        compState.gloab.recovered.recoveryPercent = Math.ceil(
          (item[1].All.recovered / item[1].All.confirmed) * 100
        );

        compState.gloab.deaths.totalDeaths = item[1].All.deaths;

        compState.gloab.deaths.deathsPerMil = Math.ceil(
          (item[1].All.deaths / item[1].All.population) * 1000000
        );

        compState.gloab.pop = item[1].All.population;
      } else if (item[1].All.continent === "Oceania") {
        oceania[0] = oceania[0] + item[1].All.confirmed;
        oceania[1] = oceania[1] + item[1].All.recovered;
        oceania[2] = oceania[2] + item[1].All.deaths;
        oceania[3] = oceania[3] + item[1].All.population;
      } else if (item[1].All.continent === "South America") {
        southAmerica[0] = southAmerica[0] + item[1].All.confirmed;
        southAmerica[1] = southAmerica[1] + item[1].All.recovered;
        southAmerica[2] = southAmerica[2] + item[1].All.deaths;
        southAmerica[3] = southAmerica[3] + item[1].All.population;
      } else if (item[1].All.continent === "North America") {
        northAmerica[0] = northAmerica[0] + item[1].All.confirmed;
        northAmerica[1] = northAmerica[1] + item[1].All.recovered;
        northAmerica[2] = northAmerica[2] + item[1].All.deaths;
        northAmerica[3] = northAmerica[3] + item[1].All.population;
      } else if (item[1].All.continent === "Europe") {
        europe[0] = europe[0] + item[1].All.confirmed;
        europe[1] = europe[1] + item[1].All.recovered;
        europe[2] = europe[2] + item[1].All.deaths;
        europe[3] = europe[3] + item[1].All.population;
      } else if (item[1].All.continent === "Africa") {
        africa[0] = africa[0] + item[1].All.confirmed;
        africa[1] = africa[1] + item[1].All.recovered;
        africa[2] = africa[2] + item[1].All.deaths;
        africa[3] = africa[3] + item[1].All.population;
      } else if (item[1].All.continent === "Asia") {
        asia[0] = asia[0] + item[1].All.confirmed;
        asia[1] = asia[1] + item[1].All.recovered;
        asia[2] = asia[2] + item[1].All.deaths;
        asia[3] = asia[3] + item[1].All.population;
      }
    });

    compState.continent.oceania.cases = oceania[0];
    compState.continent.oceania.casesPerMil = Math.ceil(
      (oceania[0] / oceania[3]) * 1000000
    );
    compState.continent.oceania.recovered = oceania[1];
    compState.continent.oceania.recoveryPercent = Math.ceil(
      (oceania[1] / oceania[0]) * 100
    );
    compState.continent.oceania.deaths = oceania[2];
    compState.continent.oceania.deathsPerMil = Math.ceil(
      (oceania[2] / oceania[3]) * 1000000
    );
    compState.continent.oceania.pop = oceania[3];

    compState.continent.northAmerica.cases = northAmerica[0];
    compState.continent.northAmerica.casesPerMil = Math.ceil(
      (northAmerica[0] / northAmerica[3]) * 1000000
    );
    compState.continent.northAmerica.recovered = northAmerica[1];
    compState.continent.northAmerica.recoveryPercent = Math.ceil(
      (northAmerica[1] / northAmerica[0]) * 100
    );
    compState.continent.northAmerica.deaths = northAmerica[2];
    compState.continent.northAmerica.deathsPerMil = Math.ceil(
      (northAmerica[2] / northAmerica[3]) * 1000000
    );
    compState.continent.northAmerica.pop = northAmerica[3];

    compState.continent.southAmerica.cases = southAmerica[0];
    compState.continent.southAmerica.casesPerMil = Math.ceil(
      (southAmerica[0] / southAmerica[3]) * 1000000
    );
    compState.continent.southAmerica.recovered = southAmerica[1];
    compState.continent.southAmerica.recoveryPercent = Math.ceil(
      (southAmerica[1] / southAmerica[0]) * 100
    );
    compState.continent.southAmerica.deaths = southAmerica[2];
    compState.continent.southAmerica.deathsPerMil = Math.ceil(
      (southAmerica[2] / southAmerica[3]) * 1000000
    );
    compState.continent.southAmerica.pop = southAmerica[3];

    compState.continent.europe.cases = europe[0];
    compState.continent.europe.casesPerMil = Math.ceil(
      (europe[0] / europe[3]) * 1000000
    );
    compState.continent.europe.recovered = europe[1];
    compState.continent.europe.recoveryPercent = Math.ceil(
      (europe[1] / europe[0]) * 100
    );
    compState.continent.europe.deaths = europe[2];
    compState.continent.europe.deathsPerMil = Math.ceil(
      (europe[2] / europe[3]) * 1000000
    );
    compState.continent.europe.pop = europe[3];

    compState.continent.africa.cases = africa[0];
    compState.continent.africa.casesPerMil = Math.ceil(
      (africa[0] / africa[3]) * 1000000
    );
    compState.continent.africa.recovered = africa[1];
    compState.continent.africa.recoveryPercent = Math.ceil(
      (africa[1] / africa[0]) * 100
    );
    compState.continent.africa.deaths = africa[2];
    compState.continent.africa.deathsPerMil = Math.ceil(
      (africa[2] / africa[3]) * 1000000
    );
    compState.continent.africa.pop = africa[3];

    compState.continent.asia.cases = asia[0];
    compState.continent.asia.casesPerMil = Math.ceil(
      (asia[0] / asia[3]) * 1000000
    );
    compState.continent.asia.recovered = asia[1];
    compState.continent.asia.recoveryPercent = Math.ceil(
      (asia[1] / asia[0]) * 100
    );
    compState.continent.asia.deaths = asia[2];
    compState.continent.asia.deathsPerMil = Math.ceil(
      (asia[2] / asia[3]) * 1000000
    );
    compState.continent.asia.pop = asia[3];

    this.setState(compState);
  }

  componentDidMount() {
    let cases_URL = "https://covid-api.mmediagroup.fr/v1/cases";
    fetch(cases_URL)
      .then((res) => res.json())
      .then((data) => {
        let countryDataObject = [];
        Object.entries(data).forEach((item) => {
          if (item[1].All.country) {
            if (
              (item[1].All.country === "US") &
              (item[1].All.recovered === 0)
            ) {
              item[1].All.recovered = 26803096;
            }
            if (
              (item[1].All.country === "Sweden") &
              (item[1].All.recovered === 0)
            ) {
              item[1].All.recovered = 917616;
            }
            if (
              (item[1].All.country === "Belgium") &
              (item[1].All.recovered === 0)
            ) {
              item[1].All.recovered = 926877;
            }
            if (item[1].All.country === "United Kingdom") {
              item[1].All.recovered = 4299889;
            }
            countryDataObject.push(item[1].All);
          }
        });

        const compState = { ...this.state };
        compState.country.countryData = countryDataObject;
        this.setState(compState);
        this.calculateGlobalValues(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCountryTableOrderClickCountry = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      let fa = a.country.toLowerCase(),
        fb = b.country.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderClickConfirmed = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return b.confirmed - a.confirmed;
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderClickRecovered = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return b.recovered - a.recovered;
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderClickRecoveredPer = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return (
        Math.ceil((b.recovered / b.confirmed) * 100) -
        Math.ceil((a.recovered / a.confirmed) * 100)
      );
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderClickDeaths = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return b.deaths - a.deaths;
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderClickDeathsPerMil = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return (
        Math.ceil((b.deaths / b.population) * 1000000) -
        Math.ceil((a.deaths / a.population) * 1000000)
      );
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderClickConfirmedPerMil = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return (
        Math.ceil((b.confirmed / b.population) * 1000000) -
        Math.ceil((a.confirmed / a.population) * 1000000)
      );
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  handleCountryTableOrderPop = () => {
    const compState = { ...this.state };
    let countryDataObject = compState.country.countryData;
    countryDataObject.sort((a, b) => {
      return b.population - a.population;
    });
    compState.country.countryData = countryDataObject;
    this.setState(compState);
  };

  render() {
    return (
      <div className="globalView-body">
        <div className="globalViewPg-container">
          <div className="global-grid-item grid-item-1 Global-Head">
            <h1 className="globalView-Heading">
              <b>Global View</b>
            </h1>
            <p className="global-subHeading">Affected Countries: 222</p>
          </div>

          <div className="global-grid-item grid-item-2 cards status-cards">
            <StatusCards
              totalCases={this.state.gloab.cases.totalCases}
              casesPerMil={this.state.gloab.cases.casesPerMil}
              totalRecovered={this.state.gloab.recovered.totalRecovered}
              recoveryPercent={this.state.gloab.recovered.recoveryPercent}
              totalDeaths={this.state.gloab.deaths.totalDeaths}
              deathsPerMil={this.state.gloab.deaths.deathsPerMil}
            />
          </div>

          <div className="global-grid-item grid-item-3 gloabRegionSecondHead">
            <h2 className="regionTableHeading">
              <b>Region Covid Data</b>
            </h2>
          </div>
          <div className="global-grid-item grid-item-4 globalBarGraph">
            <RegionBarGraph regionData={this.state.continent} />
          </div>

          <div className="global-grid-item grid-item-5 globalRegionalTable">
            <RegionTableData tableData={this.state.continent} />
          </div>

          <div className="global-grid-item grid-item-6 gloabCountrySecondHead">
            <h2 className="countryTableHeading">
              <b>Country Covid Data</b>
            </h2>
          </div>
          <div className="global-grid-item grid-item-7 globalCountryTable">
            <CountryDataTable
              countryData={this.state.country.countryData}
              handleCountryTableOrderClickConfirmed={
                this.handleCountryTableOrderClickConfirmed
              }
              handleCountryTableOrderClickRecovered={
                this.handleCountryTableOrderClickRecovered
              }
              handleCountryTableOrderClickDeaths={
                this.handleCountryTableOrderClickDeaths
              }
              handleCountryTableOrderClickCountry={
                this.handleCountryTableOrderClickCountry
              }
              handleCountryTableOrderClickRecoveredPer={
                this.handleCountryTableOrderClickRecoveredPer
              }
              handleCountryTableOrderClickDeathsPerMil={
                this.handleCountryTableOrderClickDeathsPerMil
              }
              handleCountryTableOrderClickConfirmedPerMil={
                this.handleCountryTableOrderClickConfirmedPerMil
              }
              handleCountryTableOrderPop={this.handleCountryTableOrderPop}
              gloabDataForCountryGraphRoute={this.state.gloab}
            />
          </div>
        </div>
      </div>
    );
  }
}
