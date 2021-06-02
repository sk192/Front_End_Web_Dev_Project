import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">COVID-19 </h1>
      <p className="lead">
        This application is a statistical dashboard application in which we are
        displaying information/ statistics regarding COVID-19 cases country wise
        and continental wise in different formats (graphs and tables).
        Application is also providing other statistical analysis and information
        regarding diffrent vaccines available in each country and vaccination
        status of each country.
      </p>
      <hr className="my-4" />
      <p>
        <b>covid_Info: </b>Global view and Country view of covid statistics
      </p>
      <p>
        <b>Vaccination:</b> Country vaccine statistics and vaccine by
        manufacturer information
      </p>
    </div>
  );
};

export default HomePage;
