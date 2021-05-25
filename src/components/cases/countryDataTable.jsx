import { useState } from "react";
import { Link } from "react-router-dom";

export default function CountryDataTable(props) {
  // const [style, setStyle] = useState({width="100%"});
  return (
    <div className="countryDataTable">
      <table className="countryDataTable">
        <thead className="countryThead">
          <tr className="countryDataTableRow rowHead">
            <th className="countryDataHead countryName">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderClickCountry()}
              >
                Country
              </button>
            </th>

            <th className="countryDataHead countryTotal">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderClickConfirmed()}
              >
                Total Cases
              </button>
            </th>

            <th className="countryDataHead countryRecovery">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderClickDeaths()}
              >
                Deaths
              </button>
            </th>

            <th className="countryDataHead countryDeaths">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderClickRecovered()}
              >
                Recovery
              </button>
            </th>

            <th className="countryDataHead countryRecoveryPercent">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderClickRecoveredPer()}
              >
                Recovery %
              </button>
            </th>

            <th className="countryDataHead countryCasesPerMil">
              <button
                type="button"
                onClick={() =>
                  props.handleCountryTableOrderClickConfirmedPerMil()
                }
              >
                Cases per Mil
              </button>
            </th>

            <th className="countryDataHead countryDeathsPerMil">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderClickDeathsPerMil()}
              >
                Deaths per Mil
              </button>
            </th>

            <th className="countryDataHead countryPop">
              <button
                type="button"
                onClick={() => props.handleCountryTableOrderPop()}
              >
                Population
              </button>
            </th>
          </tr>
        </thead>
          <tbody className="countryTbody">
            {props.countryData.map((item) => (
              <tr
                className="countryDataTableRow rowData"
                key={
                  item.country +
                  Math.floor(Math.random() * 2000) +
                  item.abbreviation
                }
              >
                <td
                  className="countryData td1"
                  key={
                    "cont" +
                    item.abbreviation +
                    Math.floor(Math.random() * 2000)
                  }
                >
                  <Link
                    to={{
                      pathname: `/countryView/${item.country}`,
                      state: {
                        gloabTotalCases:
                          props.gloabDataForCountryGraphRoute.cases.totalCases,
                        gloabTotalRecovered:
                          props.gloabDataForCountryGraphRoute.recovered
                            .totalRecovered,
                        gloabTotalDeaths:
                          props.gloabDataForCountryGraphRoute.deaths
                            .totalDeaths,
                      },
                    }}
                  >
                    {item.country}
                  </Link>
                </td>

                <td
                  className="countryData td2"
                  key={
                    "confir" +
                    item.abbreviation +
                    Math.floor(Math.random() * 2000)
                  }
                >
                  {item.confirmed}
                </td>

                <td
                  className="countryData td3"
                  key={
                    "deaths" + item.deaths + Math.floor(Math.random() * 2000)
                  }
                >
                  {item.deaths}
                </td>

                <td
                  className="countryData td4"
                  key={
                    "recovery" +
                    item.recovered +
                    Math.floor(Math.random() * 2000)
                  }
                >
                  {item.recovered}
                </td>

                <td
                  className="countryData td4"
                  key={
                    "recoveryrate" +
                    item.abbreviation +
                    Math.floor(Math.random() * 2000)
                  }
                >
                  {Math.ceil((item.recovered / item.confirmed) * 100)}%
                </td>

                <td
                  className="countryData td2"
                  key={
                    "casespermil" +
                    item.confirmed +
                    Math.floor(Math.random() * 2000)
                  }
                >
                  {Math.ceil((item.confirmed / item.population) * 1000000)}
                </td>

                <td
                  className="countryData td3"
                  key={
                    "deathpermil" +
                    item.deaths +
                    Math.floor(Math.random() * 2000)
                  }
                >
                  {Math.ceil((item.deaths / item.population) * 1000000)}
                </td>

                <td
                  className="countryData td5"
                  key={
                    "pop" + item.population + Math.floor(Math.random() * 2000)
                  }
                >
                  {item.population}
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}
