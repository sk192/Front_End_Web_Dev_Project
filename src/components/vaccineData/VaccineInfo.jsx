import axios from "axios";
import React, { Component } from "react";
import Barchart from "./barchart";
import "../../index.css";

class VaccineInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }

  componentDidMount = async () => {
    try {
      const url = "./dataset/vaccine_data_global.json";
      let responseData = await axios.get(url);

      let a = [];

      responseData.data.forEach((element) => {
        let new_arr = {};
        if (element.Province_State === "") {
          new_arr["country"] = element.Country_Region;
          new_arr["People_fully_vaccinated"] = element.People_fully_vaccinated;
          new_arr["People_partially_vaccinated"] =
            element.People_partially_vaccinated;
          new_arr["Doses_admin"] = element.Doses_admin;
          new_arr["value"] = element.UID;
          a.push(new_arr);
        }
      });

      this.setState({
        arr: a,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container">
        <Barchart />
      </div>
    );
  }
}

export default VaccineInfo;
