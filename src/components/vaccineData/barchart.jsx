import React, { Component } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import StackedBar from "./stackedBar.jsx";
import "./barchart.css";
import TableData from "./TableData";


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
      whole_data: [],
    };
    this.style = {
      chips: {
        background: "green",
      },
      searchBox: {
        borderBottom: "1px solid blue",
        borderRadius: "5px",
        backgroundColor: "white",
      },
      multiselectContainer: {
        color: "black",
      },
    };
  }
  numFormate = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };
  componentDidMount = async () => {
    try {
      const url = "./dataset/vaccine_data_global.json";
      let responseData = await axios.get(url);
      let dataForChart = [];
      let dataForTable = [];

      responseData.data.forEach((element) => {
        let allData = {};
        let new_arr = {};

        if (element.Province_State === "") {
          new_arr["country"] = element.Country_Region;
          new_arr["People_fully_vaccinated"] = element.People_fully_vaccinated;
          new_arr["People_partially_vaccinated"] =
            element.People_partially_vaccinated;
          new_arr["Doses_admin"] = element.Doses_admin;
          new_arr["value"] = element.UID;
          allData["Country"] = element.Country_Region;

          allData["People_fully_vaccinated"] = this.numFormate(
            element.People_fully_vaccinated
          );
          allData["People_partially_vaccinated"] = this.numFormate(
            element.People_partially_vaccinated
          );
          allData["Doses_admin"] = this.numFormate(element.Doses_admin);
          allData["value"] = element.UID;
          dataForChart.push(new_arr);
          dataForTable.push(allData);
        }
      });
      dataForChart.forEach((element) => {
        this.state.country_names.push(element.country);
      });

      this.setState({
        arr: dataForChart,
        whole_data: dataForTable,
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
        if (!this.state.country_label.includes(ele.country)) {
          this.state.country_label.push(ele.country);
          this.state.partillyVaccinated.push(ele.People_partially_vaccinated);
          this.state.fullyVaccinated.push(ele.People_fully_vaccinated);
          this.state.total_dose.push(ele.Doses_admin);
        }
      }
    });
  };
  onRemove = (selectedList, removedItem) => {
    const newList = selectedList.filter((item) => item !== removedItem);

    this.setState({
      selectedCountryVal: newList,
    });
    console.log(this.state.selectedCountryVal);
  };

  render() {
    return (
      <div className="container-block">
        <div className="tableHeading">
          <h1>
            <b>Countries vaccine information</b>
          </h1>
        </div>
        <div className="check">
          <Multiselect
            options={this.state.country_names}
            placeholder="Select upto 4 countries"
            onSelect={this.onSelect}
            value="checkbox"
            showCheckbox={true}
            selectionLimit="4"
            style={this.style}
            id="css_custom"
            closeIcon="circle"
            isObject={false}
            onRemove={this.onRemove}
          />
        </div>
        <div className="bar">
          <StackedBar
            barCountryData={this.state.country_label}
            barPartiallyData={this.state.partillyVaccinated}
            barFullyData={this.state.fullyVaccinated}
            barTotalDose={this.state.total_dose}
          />
        </div>
        
        <div className="table-responsive table-sm table-wrapper">
          <TableData vData={this.state.whole_data} />
        </div>
      </div>
    );
  }
}

export default Barchart;
