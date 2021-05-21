import React from "react";
import "./TableData.css";
import Table from "react-bootstrap/Table";

export default function TableData(props) {
  return (
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
     
      <table class="table table-bordered  w-auto mb-0">
        <thead>
          {/* <caption>
          
          </caption> */}
          
          <tr className="hrow">
            <th scope="col" className="heading">
              UID
            </th>
            <th scope="col" className="heading">
              Country
              <br />
              Region
            </th>
            <th scope="col" className="heading">
              Province <br /> State
            </th>
            <th scope="col" className="heading">
              Doses <br /> admin
            </th>
            <th scope="col" className="heading">
              received two <br /> doses
            </th>
            <th scope="col" className="heading">
              received <br />one <br />dose
            </th>
          </tr>
        </thead>
        <tbody>
          {props.vData.map((item) => (
            <tr>
              <th scope="row" className="abc">
                {item.value}
              </th>
              <td>{item.Country}</td>
              <td>{item.Province_State}</td>

              <td>{item.Doses_admin}</td>
              <td>{item.People_fully_vaccinated}</td>
              <td>{item.People_partially_vaccinated}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </div>
  );
}
