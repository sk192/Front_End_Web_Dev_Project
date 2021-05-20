import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class RegionBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        // responsive: false,
        labels: [
          "Africa",
          "Asia",
          "Oceania",
          "Europe",
          "South America",
          "North America",
        ],
        datasets: [
          {
            label: "Cases",
            backgroundColor: "rgb(54, 162, 235)",
            stack: "Stack 0",
            data: [
              props.regionData.africa.totalCases,
              props.regionData.asia.totalCases,
              props.regionData.australia.totalCases,
              props.regionData.europe.totalCases,
              props.regionData.northAmerica.totalCases,
              props.regionData.southAmerica.totalCases,
            ],
          },
          {
            label: "deaths",
            backgroundColor: "rgb(255, 99, 132)",
            stack: "Stack 0",
            data: [
              props.regionData.africa.totalDeaths,
              props.regionData.asia.totalDeaths,
              props.regionData.australia.totalDeaths,
              props.regionData.europe.totalDeaths,
              props.regionData.northAmerica.totalDeaths,
              props.regionData.southAmerica.totalDeaths,
            ],
          },
          {
            label: "Recovered",
            backgroundColor: "rgb(75, 192, 192)",
            stack: "Stack 0",
            data: [
              props.regionData.africa.totalRecovered,
              props.regionData.asia.totalRecovered,
              props.regionData.australia.totalRecovered,
              props.regionData.europe.totalRecovered,
              props.regionData.northAmerica.totalRecovered,
              props.regionData.southAmerica.totalRecovered,
            ],
          },
        ],
      },
    };
  }

  render() {
    console.log("data in graphs --> ", this.props.regionData);
    return (
      <div className="regionBarGraph">
        <Bar
          data={this.state.chartData}
          options={{
            indexAxis: "y",
            // title: {
            //   display: "hello",
            //   text: "Largest Cities In ",
            //   fontSize: 25,
            // },
            // legend: {
            //   display: true,
            //   position: "bottom",
            // },
          }}
        />
      </div>
    );
  }
}

export default RegionBarGraph;
