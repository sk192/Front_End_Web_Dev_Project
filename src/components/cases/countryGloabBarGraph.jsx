import React from "react";
import { Bar } from "react-chartjs-2";

export default function CountryGloabBarGraph(props) {
  const data = {
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
  };
  console.log("**** inside stacked bar graph *** ", props);
  return (
    <div className="countryGloabBarGraph-div">
      <Bar data={data} />
    </div>
  );
}
