import { Bar } from "react-chartjs-2";

export default function RegionBarGraph(props){
  const stateValues = {
    chartData: {
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
            props.regionData.africa.cases,
            props.regionData.asia.cases,
            props.regionData.oceania.cases,
            props.regionData.europe.cases,
            props.regionData.northAmerica.cases,
            props.regionData.southAmerica.cases,
          ],
        },
        {
          label: "deaths",
          backgroundColor: "rgb(255, 99, 132)",
          stack: "Stack 0",
          data: [
            props.regionData.africa.deaths,
            props.regionData.asia.deaths,
            props.regionData.oceania.deaths,
            props.regionData.europe.deaths,
            props.regionData.northAmerica.deaths,
            props.regionData.southAmerica.deaths,
          ],
        },
        {
          label: "Recovered",
          backgroundColor: "rgb(75, 192, 192)",
          stack: "Stack 0",
          data: [
            props.regionData.africa.recovered,
            props.regionData.asia.recovered,
            props.regionData.oceania.recovered,
            props.regionData.europe.recovered,
            props.regionData.northAmerica.recovered,
            props.regionData.southAmerica.recovered,
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
    <div className="regionBarGraph">
      <Bar
        className="regionBar-graphCanvas"
        data={stateValues.chartData}
        options={stateValues.chartOptions}
      />
    </div>
  );
        
}