import React from "react";
export default function CountryGloabTable({
  barGraphGloabData,
  barGraphCountryData,
}) {
  return (
    <div className="countryGlobalTableData">
      <table id="cgTable">
        <thead className="cgTable-head">
          <tr className="cgTableRow zero">
            <th className="cgTable-heading Data">Data</th>
            <th className="cgTable-heading Country">Country</th>
            <th className="cgTable-heading World">World</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cgTableRow first totalCases">
            <td className="cgTable-data ctotal-cases">Total Cases</td>
            <td className="cgTable-data c-cases">
              {barGraphCountryData.totalCases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="cgTable-data gtotal-cases">
              {barGraphGloabData.gloabTotalCases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>
          <tr className="cgTableRow second recovered">
            <td className="cgTable-data crecovered">Recovered</td>
            <td className="cgTable-data c-recovered">
              {barGraphCountryData.totalRecovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="cgTable-data grecovered">
              {barGraphGloabData.gloabTotalRecovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>
          <tr className="cgTableRow third deaths">
            <td className="cgTable-data cdeaths">Deaths</td>
            <td className="cgTable-data c-deaths">
              {barGraphCountryData.totalDeaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="cgTable-data gdeaths">
              {barGraphGloabData.gloabTotalDeaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
