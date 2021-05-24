import React, { Component } from "react";
import axios from 'axios';
// import Select from 'react-select';
import { Multiselect } from "multiselect-react-dropdown";
// import PieChart from './pieChart';
import './vaccineManufacture.css'
import DonutChart from 'react-donut-chart';




class VaccineCompany extends Component{
    constructor(props){
        super(props);
        this.state= {
            piechart_arr:[],
            json_data:[],
            countryNames:[],
            selectedOption: null,
            label_arr : [],


            
        }
        this.color = 
           ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ]
   
        this.style1 = {
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
                    background : 'red',
                },
         };

        
    }

    componentDidMount = async () => {
        try {
            // console.log('welcome')
        const url = "./dataset/vaccinations-by-manufacturer.json";
        let responseData = await axios.get(url);
        
        console.log(responseData);
        let jsonData = {};
        let selectData = [];
        // let country_vaccineDoses = {};
        // let country_vaccine = {};
            let i = 0;
        responseData.data.forEach(element => {
            let country = {};
            
           
            if(jsonData.hasOwnProperty(element.location)){
                let loc = element.location;
                let vacc = element.vaccine;
                let tDsose = element.total_vaccinations;
                jsonData[loc][vacc] = tDsose;
            }
            else{
                let loc = element.location;
                i += 1;
                jsonData[loc] = {};
                // country.push(loc);un
                country['name'] = loc;
                country['id'] = i;
                selectData.push(country);

            }
     
        });
        this.setState({
            countryNames : selectData,
            json_data : jsonData,
        })
        console.log(jsonData)
        console.log(this.state.json_data);
        console.log(this.state.countryNames);
        


        }
        catch (err) {
            console.log(err);
        }
    
}
 onSelect = (selectedList, selectedItem) => {
    this.setState({
      selectedOption:selectedItem,
    });
    let chart = [];
    let l_arr = [];
    console.log(this.state.selectedOption);
    
    for(let k of Object.keys(this.state.json_data)){
        // console.log(k);
        console.log(this.state.selectedOption);
        if(k === selectedItem["name"]){
            console.log("in");
            for(let key of Object.keys(this.state.json_data[k])){
                let obj1 = {};
                obj1["label"] = key;
                obj1["value"] = this.state.json_data[k][key];
                chart.push(obj1);
                l_arr.push(key);

            }
        
        }

 }
 
    this.setState({
        piechart_arr : chart,
        label_arr : l_arr,
    })
          console.log(this.state.piechart_arr);
        };


  render() {
   
    return (
    <div className='containerDiv'>
        <h1>Vaccine By Country</h1>
        <div className='selectDiv'>
           
            <Multiselect
                options={this.state.countryNames}
                placeholder="Select country"
               
                onSelect={this.onSelect}
                displayValue="name"
                style={this.style1}
                singleSelect = 'true'
           />
       </div>
       <div className='piediv'>
      
            {/* <PieChart chartdata = {this.state.piechart_arr}/> */}
            <DonutChart
                data={this.state.piechart_arr} 
                colors = {this.state.color}
                // strokeColor = '#673ab7'
                // formatValues = {(values, total) => `${(values / total * 100).toFixed(2)}%`}
                onMouseEnter = {(item) => item}
                legend = {true}
            />

            
                        
       </div>
   </div>
     
    );
  }

    }




export default VaccineCompany;