import React, { Component } from "react";
import axios from "axios";

export default class GlobalView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: {
        totalCases: 0,
        newCases: 0,
        totalCasesPerMil: 0,
      },
      activeCases: {
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
    };
  }

  componentDidMount() {
    let URL =
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world";

    let getData = () =>
      axios({
        method: "GET",
        url: URL,
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
        console.log(data);
        data.forEach((element) => {
          this.setState({
            cases: {
              totalCases: element.TotalCases,
              newCases: element.NewCases,
              totalCasesPerMil: element.TotCases_1M_Pop,
            },
            activeCases: {
              activeCases: element.ActiveCases,
              seriousCritical: element.Serious_Critical,
            },
            recovered: {
              totalRecovered: parseInt(element.TotalRecovered),
              newlyRecovered: element.NewRecovered,
            },
            deaths: {
              totalDeaths: element.TotalDeaths,
              newDeaths: element.NewDeaths,
              deathsPerMil: element.Deaths_1M_pop,
            },
          });
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Global View</h1>
      </div>
    );
  }
}
