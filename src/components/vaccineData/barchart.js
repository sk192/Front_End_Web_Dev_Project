import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import Stackedbar from "./stackedBar";
import "./barchart.css";

class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      country_names: [],
      selectedCountryVal: [],
      fullyVaccinated: [],
      partillyVaccinated: [],
      country_label: [],
      total_dose: [],
    };
    this.style = {
      chips: {
        background: "red",
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px",
      },
      multiselectContainer: {
        color: "red",
      },
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
      a.forEach((element) => {
        this.state.country_names.push(element.country);
      });

      this.setState({
        arr: a,
      });
    } catch (err) {
      console.log(err);
    }
  };
  onSelect = (selectedList, selectedItem) => {
    this.setState({
      selectedCountryVal: selectedList,
    });

    this.state.arr.forEach((ele) => {
      if (selectedList.includes(ele.country)) {
        console.log("in");
        if (!this.state.country_label.includes(ele.country)) {
          this.state.country_label.push(ele.country);
          this.state.partillyVaccinated.push(ele.People_partially_vaccinated);
          this.state.fullyVaccinated.push(ele.People_fully_vaccinated);
          this.state.total_dose.push(ele.Doses_admin);
        }
      }
    });
  };

  render() {
    return (
      <div className="container-block">
        <div className="check">
          <Multiselect
            options={this.state.country_names}
            placeholder="Select country"
            onSelect={this.onSelect}
            showCheckbox={true}
            selectionLimit="4"
            style={this.style}
            id="css_custom"
            closeIcon="close"
            isObject={false}
          />
        </div>
        <div className="bar">
          <Stackedbar
            bar_country_data={this.state.country_label}
            bar_partially_data={this.state.partillyVaccinated}
            bar_fully_data={this.state.fullyVaccinated}
            bar_total_dose={this.state.total_dose}
          />
        </div>
      </div>
    );
  }
}

export default Barchart;
