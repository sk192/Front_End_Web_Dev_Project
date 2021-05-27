import React from "react";
import "./TableData.css";

export default function TableData(props) {
  return (
    <div className="table">
      <table className="table table-bordered   mb-0">
        <thead>
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
              Doses <br /> admin
            </th>
            <th scope="col" className="heading">
              received two <br /> doses
            </th>
            <th scope="col" className="heading">
              received <br />
              one <br />
              dose
            </th>
          </tr>
        </thead>
        <tbody>
          {props.vData.map((item) => (
            <tr className="tableRow" key={'tableInfo'+ item.Country+item.value}>
              <th scope="row" className="countryUID" key={"head"+ item.value}>
                {item.value}
              </th>
              <td className="tableColumn" key={"country_name"+item.value}>{item.Country}</td>
              <td className="tableColumn" key={'doses'+item.value}>{item.Doses_admin}</td>
              <td className="tableColumn" key={'full'+item.value}>{item.People_fully_vaccinated}</td>
              <td className="tableColumn" key={'part'+item.value}>{item.People_partially_vaccinated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
