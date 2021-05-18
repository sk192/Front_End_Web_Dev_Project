import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container1">
        <div className="row row1">
          <div className="col col1">
            <h4>COVID-19 DASHBOARD</h4>
            <h5 className="list-unstyled">By:</h5>
            <p>
              <b>
                <em>Shweta Korulkar</em>
              </b>
              <br />
              <b>
                <em>Sree Vandana</em>
              </b>
            </p>
          </div>
          <div className="col col2">
            <h4>Powered By</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <b>ReactJS</b>
                </a>
              </li>
              <li>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Heroku</b>
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Bootstrap</b>
                </a>
              </li>
              <li>
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Font Awesome</b>
                </a>
              </li>
            </ul>
          </div>

          <div className="col col3">
            <b>
              <h4>APIs used</h4>
            </b>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/M-Media-Group/Covid-19-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Covid-19API</b>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/owid/covid-19-data/tree/master/public/data/vaccinations"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Covid-19VaccineDataset</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} COVID-19 DASHBOARD | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;