import { Link } from "react-router-dom";

export default function CountryDataTable(props) {
  return (
    <div className="countryDataTable">
      <table className="countryDataTable">
        <thead className="countryThead">
          <tr className="countryDataTableRow rowHead">
            <th className="countryDataHead countryName">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderClickCountry()}
              >
                Country
                <span>
                  <i className="fas fa-sort-alpha-down countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryTotal">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderClickConfirmed()}
              >
                Total Cases
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryRecovery">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderClickDeaths()}
              >
                Deaths
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryDeaths">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderClickRecovered()}
              >
                Recovery
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryRecoveryPercent">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderClickRecoveredPer()}
              >
                Recovery %
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryCasesPerMil">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() =>
                  props.handleCountryTableOrderClickConfirmedPerMil()
                }
              >
                Cases per Mil
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryDeathsPerMil">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderClickDeathsPerMil()}
              >
                Deaths per Mil
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
              </button>
            </th>

            <th className="countryDataHead countryPop">
              <button
                className="countryDataTable-btn"
                type="button"
                onClick={() => props.handleCountryTableOrderPop()}
              >
                Population
                <span>
                  <i className="fas fa-sort-numeric-down-alt countryNameDesc"></i>
                </span>
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
                  "cont" + item.abbreviation + Math.floor(Math.random() * 2000)
                }
              >
                <Link
                  className="countryName-link"
                  role="link"
                  to={{
                    pathname: `/countryView/${item.country}`,
                    state: {
                      gloabTotalCases:
                        props.gloabDataForCountryGraphRoute.cases.totalCases,
                      gloabTotalRecovered:
                        props.gloabDataForCountryGraphRoute.recovered
                          .totalRecovered,
                      gloabTotalDeaths:
                        props.gloabDataForCountryGraphRoute.deaths.totalDeaths,
                    },
                  }}
                >
                  {item.country}{" "}
                  <span className="gitExternalLinkIcon">
                    <i className="fas fa-external-link-alt gitExternalLink"></i>
                  </span>
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
                {item.confirmed
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </td>

              <td
                className="countryData td3"
                key={"deaths" + item.deaths + Math.floor(Math.random() * 2000)}
              >
                {item.deaths
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </td>

              <td
                className="countryData td4"
                key={
                  "recovery" + item.recovered + Math.floor(Math.random() * 2000)
                }
              >
                {item.recovered
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
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
                {Math.ceil((item.confirmed / item.population) * 1000000)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </td>

              <td
                className="countryData td3"
                key={
                  "deathpermil" + item.deaths + Math.floor(Math.random() * 2000)
                }
              >
                {Math.ceil((item.deaths / item.population) * 1000000)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </td>

              <td
                className="countryData td5"
                key={"pop" + item.population + Math.floor(Math.random() * 2000)}
              >
                {(Math.ceil(item.population / 1000000).toString() + "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
