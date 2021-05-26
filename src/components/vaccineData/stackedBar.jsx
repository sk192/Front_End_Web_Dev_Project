import { Bar } from "react-chartjs-2";

export default function StackedBar(props) {
  return (
    <div className="main">
      <Bar
        pointStyle="star"
        data={{
          labels: props.barCountryData,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "people_partially_vaccinated",
              pointstyle: "rectRounded",
              backgroundColor: "#6ED3FF",
              barThickness: 40,
              categoryPercentage: 1,
              data: props.barPartiallyData,
            },
            {
              label: "people_fully_vaccinated",
              backgroundColor: "#1497FF",
              barThickness: 40,
              categoryPercentage: 1,
              pointstyle: "triangle",
              data: props.barFullyData,
            },
            {
              label: "total_vaccine_dose",
              backgroundColor: "#ff0000",
              barThickness: 40,
              categoryPercentage: 1,
              pointstyle: "triangle",
              data: props.barTotalDose,
            },
          ],
        }}
        height={220}
        options={{
          offsetGridLines: true,
          drawTicks: true,
          layout: {
            padding: {
              top: 0,
              right: 40,
              bottom: 10,
            },
          },
          legend: {
            display: true,
            position: "right",
            align: "start",
            labels: {
              usePointStyle: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                stacked: false,

                gridLines: {
                  drawBorder: false,
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,

                  callback(n) {
                    if (n < 1e3) return n;
                    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  },
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
