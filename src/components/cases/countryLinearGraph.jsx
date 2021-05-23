import React from "react";
import { Line } from "react-chartjs-2";

export default function CountryLinearGraph(props) {
  const data = {
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
  };
  return (
    <div className="countryLineGraph-div">
      <h3>Linear</h3>
      <Line
        data={data}
        id="lineGraph-chart-id"
        className="lineGraph-chart-class"
      />
    </div>
  );
}
