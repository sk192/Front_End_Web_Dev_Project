import React, { Component } from 'react';
import StatusCards from "./statusCardsContainer";
import { Line } from "react-chartjs-2";
import Chart from "chart.js";
// import Chart from "chartjs";
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
      dates: {},
      // graphData: {
      //   casesDates: [],
      //   casesValues: [],
      //   recoveredDates: [],
      //   recoveredValues: [],
      //   deathsDates: [],
      //   deathsValues: [],
      // },
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
          // compState2.graphDataValues.labels = Object.keys(data.All.dates);
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
            // compState3.graphDataValues.labels = Object.keys(data.All.dates);
            compState3.graphDataValues.recoveredData = Object.values(
              data.All.dates
            ).reverse().slice(80);
            this.setState(compState3);
          });

     
  }

  render() {
    console.log("inside country view ", this.props.match.params.countryName);
    // const data = (canvas) => {
    //   const ctx = canvas.getContext("2d");
    //   const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    //   return {
    //     backgroundColor: gradient,
    //     // ...the rest
    //   };
    // };
    const data = {
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: this.state.graphDataValues.labels,
      datasets: [
        {
          label: "confirmed cases",
          // data: [33, 53, 85, 41, 44, 65],
          data: this.state.graphDataValues.confirmedData,
          fill: false,
          backgroundColor: "blue",
          borderColor: "blue",
        },
        {
          label: "deaths",
          data: this.state.graphDataValues.deathsData,
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: "recovered",
          data: this.state.graphDataValues.recoveredData,
          fill: false,
          borderColor: "green",
          backgroundColor: "green",
        },
      ],
      options: {
              scales: {
                yAxes: [
                  {
                    type: "logarithmic",
                  },
                ],
              },
            }
    };
    const legend = {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#323130",
        fontSize: 14,
      },
    };

    const options = {
      scales: {
        yAxes: [
          {
            type: "logarithmic",
            ticks: {
              min: 1,
              max: 1000000,
              callback: function (value, index, values) {
                if (value === 1000000) return "1M";
                if (value === 100000) return "100K";
                if (value === 10000) return "10K";
                if (value === 1000) return "1K";
                if (value === 100) return "100";
                if (value === 10) return "10";
                if (value === 1) return "1";
                return null;
              },
            },
          },
        ],
      },
    };
    return (
      <div>
        <h2>Country View: {this.props.match.params.countryName}</h2>
        <StatusCards
          totalCases={this.state.cardData.totalCases}
          casesPerMil={this.state.cardData.casesPerMil}
          totalRecovered={this.state.cardData.totalRecovered}
          recoveryPercent={this.state.cardData.recoveryPercent}
          totalDeaths={this.state.cardData.totalDeaths}
          deathsPerMil={this.state.cardData.deathsPerMil}
        />
        <div className="lineGraph">
          <h3>Linear</h3>
          <Line
            data={data}
          />
        </div>
        {/* <div className="lineGraph">
          <canvas id="myChart" ref={this.chartRef} />
        </div> */}
      </div>
    );
  }
}
 
export default CountryView;


