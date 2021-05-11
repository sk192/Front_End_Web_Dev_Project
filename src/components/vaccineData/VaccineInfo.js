import React, { Component } from 'react';
// import vaccine from './public/dataset/vaccinations.json';
import axios from 'axios';

class VaccineInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr : [],
            
        }

    }

    componentDidMount(){
        try{
            async function getVaccine(){
            const url = './dataset/vaccinations.json';
            let response = await axios(url);
         
            let a = [];
            response.data.forEach(element => {
                let new_arr = {}
                new_arr['country']= element.country;
        
                if(element.data[element.data.length - 1].hasOwnProperty('total_vaccinations')){
                    new_arr['total_vaccinations']= element.data[element.data.length - 1].total_vaccinations
                }
                
                if(element.data[element.data.length - 1].hasOwnProperty('people_vaccinated')){
                     new_arr['people_vaccinated']= element.data[element.data.length - 1].people_vaccinated;
                }
                 if(element.data[element.data.length - 1].hasOwnProperty('people_fully_vaccinated')){
                     new_arr['people_fully_vaccinated']= element.data[element.data.length - 1].people_fully_vaccinated;
                }
            
                a.push(new_arr);
                
                
                
            });
         
            this.setState({
                arr : a,
            })
            console.log(this.state.arr);

        }
        getVaccine();
       
        }
        catch(err){
            console.log(err);
        }
       

    }
    render(){
        return(
            <div>
                <h2>Will display map soon</h2>
            </div>
        )
        
        
    }
}

export default VaccineInfo;