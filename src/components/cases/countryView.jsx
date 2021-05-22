import React, { Component } from 'react';

class CountryView extends Component {
  state = {  }
  render() { 
    console.log("inside country view ", this.props.match.params.countryName);
    return ( 
      <div>
        <h3>Country View of {this.props.match.params.countryName}</h3>
      </div>
     );
  }
}
 
export default CountryView;


