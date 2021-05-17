import { Bar, char } from "react-chartjs-2";

export default function Stackedbar(props) {
    console.log(props.bar_fully_data);
  return (
    <div className="main">
      <Bar
        pointStyle="star"
        data={{
          labels: props.bar_country_data,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "people_partially_vaccinated",
              pointStyle: "rectRounded",
              backgroundColor: "#6ED3FF",
              barThickness: 40,
              categoryPercentage: 1,
              data: props.bar_partially_data
            },
            {
              label: "people_fully_vaccinated",
              backgroundColor: "#1497FF",
              barThickness: 40,
              categoryPercentage: 1,
              pointStyle: "triangle",
              data: props.bar_fully_data
            },
            {
              label: "total_vaccine_dose",
              backgroundColor: "#ff0000",
              barThickness: 40,
              categoryPercentage: 1,
              pointStyle: "triangle",
              data: props.bar_total_dose
            }
          ]
        }}
        height={220}
        options={{
          offsetGridLines: true,
          drawTicks: true,
          layout: {
            padding: {
              top: 30,
              right: 40,
              bottom: 40
            }
          },
          legend: {
            display: true,
            position: "right",
            align: "start",
            labels: {
              usePointStyle: true
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                stacked: false,
                gridLines: {
                  drawBorder: false
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  callback(n) {
                    if (n < 1e3) return n;
                    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  }
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}