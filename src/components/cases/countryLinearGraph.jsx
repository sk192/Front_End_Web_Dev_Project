import React from "react";
import { Line } from "react-chartjs-2";

export default function CountryLinearGraph(props) {
  const graphValues = {
    data: {
      labels: props.graphData.labels,
      datasets: [
        {
          label: "confirmed cases",
          data: props.graphData.confirmedData,
          fill: false,
          backgroundColor: "blue",
          borderColor: "blue",
        },
        {
          label: "deaths",
          data: props.graphData.deathsData,
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: "recovered",
          data: props.graphData.recoveredData,
          fill: false,
          borderColor: "green",
          backgroundColor: "green",
        },
      ],
    },
    chartOptions: {
      scales: {
        x: {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            // maxRotation: 0,
            // minRotation: 0,
          },
        },
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
    <div className="countryLineGraph-div">
      <Line
        data={graphValues.data}
        options={graphValues.chartOptions}
        id="lineGraph-chart-id"
        className="lineGraph-chart-class"
      />
    </div>
  );
}
