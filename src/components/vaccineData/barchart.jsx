import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import StackedBar from "./stackedBar.jsx";
import "./barchart.css";
import TableData from './TableData';


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
      whole_data : [],
    };
    this.style = {
      chips: {
        background: "green",
       
      },
      searchBox: {
        
        "border-bottom": "1px solid blue",
        "border-radius": "5px",
        "background-color": "rgb(238, 225, 225)",
       
      },
      multiselectContainer: {
        color: "black",
        
      },
    };
  }

  componentDidMount = async () => {
    try {
      const url = "./dataset/vaccine_data_global.json";
      let responseData = await axios.get(url);
      let dataForChart = [];
      let dataForTable = [];

      responseData.data.forEach((element) => {
        let allData = {};
        let new_arr = {};
        // console.log(element.Country_Region);
        allData["Country"] = element.Country_Region;
        allData["People_fully_vaccinated"] = element.People_fully_vaccinated;
        allData["People_partially_vaccinated"] = element.People_partially_vaccinated;
        allData["Doses_admin"] = element.Doses_admin;
        allData["value"] = element.UID;
        allData["Province_State"] = element.Province_State;

        dataForTable.push(allData);
        console.log(dataForTable.country);
        if (element.Province_State === "") {
          new_arr["country"] = element.Country_Region;
          new_arr["People_fully_vaccinated"] = element.People_fully_vaccinated;
          new_arr["People_partially_vaccinated"] = element.People_partially_vaccinated;
          new_arr["Doses_admin"] = element.Doses_admin;
          new_arr["value"] = element.UID;
        
          dataForChart.push(new_arr);
         
      }
    });
      dataForChart.forEach((element) => {
        this.state.country_names.push(element.country);
      });

      this.setState({
        arr: dataForChart,
        whole_data:dataForTable,
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
            placeholder="Select upto 4 countries"
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
          <StackedBar
            barCountryData={this.state.country_label}
            barPartiallyData={this.state.partillyVaccinated}
            barFullyData={this.state.fullyVaccinated}
            barTotalDose={this.state.total_dose}
          />
        </div>
        <div className='table-responsive table-sm table-wrapper'>
            <TableData vData = {this.state.whole_data} />
        </div>
      


        
      </div>
    );
  }
}

export default Barchart;
