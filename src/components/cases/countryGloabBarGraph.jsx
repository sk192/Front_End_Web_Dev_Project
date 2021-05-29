import React from "react";
import { Bar } from "react-chartjs-2";

export default function CountryGloabBarGraph(props) {
  const graphValues = {
    data: {
      labels: ["Confirmed Cases", "Recovered", "Deaths"],
      datasets: [
        {
          label: "Country Cases",
          backgroundColor: "rgb(54, 162, 235)",
          stack: "Stack 0",
          data: [
            props.barGraphCountryData.totalCases,
            props.barGraphCountryData.totalRecovered,
            props.barGraphCountryData.totalDeaths,
          ],
        },
        {
          label: "Global Cases",
          backgroundColor: "rgb(255, 99, 132)",
          stack: "Stack 1",
          data: [
            props.barGraphGloabData.gloabTotalCases,
            props.barGraphGloabData.gloabTotalRecovered,
            props.barGraphGloabData.gloabTotalDeaths,
          ],
        },
      ],
    },
    chartOptions: {
      scales: {
        y: {
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return value / 1e6 + "M";
            },
          },
        },
      },
    },
  };
  return (
    <div className="countryGloabBarGraph-div">
      <Bar
        data={graphValues.data}
        options={graphValues.chartOptions}
        className="countryGloabBarGraph-class"
      />
    </div>
  );
}
