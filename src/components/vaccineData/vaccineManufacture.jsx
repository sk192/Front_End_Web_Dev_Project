import React, { Component } from "react";
import axios from 'axios';
// import Select from 'react-select';
import { Multiselect } from "multiselect-react-dropdown";
import './vaccineManufacture.css'

class VaccineCompany extends Component{
    constructor(props){
        super(props);
        this.state= {
            arr:{},
            json_data:[],
            countryNames:[],
            selectedOption: null,
            
        }
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
        })
        console.log(jsonData)
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
    console.log(this.state.selectedOption);
    
 }

  render() {
   
    return (
    // <div className='containerDiv'>
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
        
    // </div>
     
    );
  }

    }




export default VaccineCompany;