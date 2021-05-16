import React, { Component } from "react";
import axios from "axios";
import MainGrid from "./mainGrid";

export default class GlobalView extends Component {
  constructor(props) {
    super(props);

    this.state = {

      global: {
        cases: {
          totalCases: 0,
          newCases: 0,
          totalCasesPerMil: 0,
        },
        actCases: {
          activeCases: 0,
          seriousCritical: 0,
        },
        recovered: {
          totalRecovered: 0,
          newlyRecovered: 0,
        },
        deaths: {
          totalDeaths: 0,
          newDeaths: 0,
          deathsPerMil: 0,
        },
      },

      continent: {
        australia: {
          totalCases: 0,
          totalDeaths: 0,
          totalRecovered: 0,
        },
        southAmerica: {
          totalCases: 0,
          totalDeaths: 0,
          totalRecovered: 0,
        },
        northAmerica: {
          totalCases: 0,
          totalDeaths: 0,
          totalRecovered: 0,
        },
        europe: {
          totalCases: 0,
          totalDeaths: 0,
          totalRecovered: 0,
        },
        africa: {
          totalCases: 0,
          totalDeaths: 0,
          totalRecovered: 0,
        },
        asia: {
          totalCases: 0,
          totalDeaths: 0,
          totalRecovered: 0,
        },
      },

    };
  }

  componentDidMount() {
    /** 
     * To retrive Global Information 
    */
    let global_URL =
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world";

    let getData = () =>
      axios({
        method: "GET",
        url: global_URL,
        headers: {
          "x-rapidapi-key":
            "737acc6d8amshdf190f9926e35e4p119829jsna077915e4884",
          "x-rapidapi-host":
            "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          useQueryString: true,
        },
      });
    getData()
      .then((resp) => {
        let data = resp.data;
        // console.log(data);
        data.forEach((element) => {
          const compState = { ...this.state };

          compState.global.cases.totalCases = element.TotalCases;
          compState.global.cases.newCases = element.NewCases;
          compState.global.cases.totalCasesPerMil = element.TotCases_1M_Pop;

          compState.global.actCases.activeCases = element.ActiveCases;
          compState.global.actCases.seriousCritical = element.Serious_Critical;

          compState.global.recovered.totalRecovered = parseInt(element.TotalRecovered);
          compState.global.recovered.newlyRecovered = element.NewRecovered;


          compState.global.deaths.totalDeaths = element.TotalDeaths;
          compState.global.deaths.newDeaths = element.NewDeaths;
          compState.global.deaths.deathsPerMil = element.Deaths_1M_pop;

          this.setState(compState);

        });
       
      })
      .catch((error) => {
        console.log(error);
      });

      /**
       * To retrive continental data
       */
      let continent_URLs = [
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/australia",
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica",
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica",
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe",
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa",
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia"
      ];

      for(let i=0; i<continent_URLs.length; i++){
       
        let getContinentData = () =>
          axios({
            method: "GET",
            url: continent_URLs[i],
            headers: {
              "x-rapidapi-key":
                "737acc6d8amshdf190f9926e35e4p119829jsna077915e4884",
              "x-rapidapi-host":
                "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
              useQueryString: true,
            },
          });

          getContinentData()
            .then((resp) => {
              let total_Cases = 0; 
              let total_Deaths = 0; 
              let total_Recovered = 0;
              let c_data = resp.data;
             
              c_data.forEach((element) => {
                total_Cases += element.TotalCases;
                total_Deaths += element.TotalDeaths;
                total_Recovered += parseInt(element.TotalRecovered);
              });
              // console.log(total_Cases, total_Deaths, total_Recovered);
              const completeState = { ...this.state }; 
              switch (i) {
                case 0:
                  completeState.continent.australia.totalCases = total_Cases;
                  completeState.continent.australia.totalDeaths = total_Deaths;
                  completeState.continent.australia.totalRecovered = total_Recovered;
                  // console.log("australia", completeState.continent.australia);
                  break;
                case 1:
                  completeState.continent.southAmerica.totalCases = total_Cases;
                  completeState.continent.southAmerica.totalDeaths = total_Deaths;
                  completeState.continent.southAmerica.totalRecovered = total_Recovered;
                  // console.log(
                  //   "southAmerica",
                  //   completeState.continent.southAmerica
                  // );
                  break;
                case 2:
                  completeState.continent.northAmerica.totalCases = total_Cases;
                  completeState.continent.northAmerica.totalDeaths = total_Deaths;
                  completeState.continent.northAmerica.totalRecovered = total_Recovered;
                  // console.log(
                  //   "northAmerica",
                  //   completeState.continent.northAmerica
                  // );
                  break;
                case 3:
                  completeState.continent.europe.totalCases = total_Cases;
                  completeState.continent.europe.totalDeaths = total_Deaths;
                  completeState.continent.europe.totalRecovered = total_Recovered;
                  // console.log("europe", completeState.continent.europe);
                  break;
                case 4:
                  completeState.continent.africa.totalCases = total_Cases;
                  completeState.continent.africa.totalDeaths = total_Deaths;
                  completeState.continent.africa.totalRecovered = total_Recovered;
                  // console.log("africa", completeState.continent.africa);
                  break;
                case 5:
                  completeState.continent.asia.totalCases = total_Cases;
                  completeState.continent.asia.totalDeaths = total_Deaths;
                  completeState.continent.asia.totalRecovered = total_Recovered;
                  // console.log("asia", completeState.continent.asia);
                  break;
                default:
                  break;
              }
              this.setState(completeState);
              // console.log(this.state);
            })
            .catch((error) => {
              console.log(error);
            });
      }

      console.log(this.state);

  }

  render() {
    return (
      <div className="globalView-body">
        <MainGrid />
      </div>
    );
  }
}
