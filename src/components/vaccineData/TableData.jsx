import React from "react";
import "./TableData.css";

export default function TableData(props) {
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table table-bordered  w-auto mb-0">
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
              Province <br /> State
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
            <tr>
              <th scope="row" className="abc">
                {item.value}
              </th>
              <td className="td1">{item.Country}</td>
              <td>{item.Province_State}</td>

              <td className="td2">{item.Doses_admin}</td>
              <td className="td3">{item.People_fully_vaccinated}</td>
              <td className="td4">{item.People_partially_vaccinated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
