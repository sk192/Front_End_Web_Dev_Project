export default function RegionTableData(props) {
  return (
    <div className="globalRegionTable">
      <table id="regionTable">
        <thead className="regionTable-head">
          <tr className="regionTableRow zero">
            <th className="regionTable-heading continent">Continent</th>
            <th className="regionTable-heading totalCases">Total-Cases</th>
            <th className="regionTable-heading casesPerMil">Cases-per-Million</th>
            <th className="regionTable-heading recovered">Recovered</th>
            <th className="regionTable-heading recoveryPercent">Recovery-Percentage</th>
            <th className="regionTable-heading deaths">Deaths</th>
            <th className="regionTable-heading population">Population</th>
          </tr>
        </thead>

        <tbody>
          <tr className="regionTableRow first africa">
            <td className="regionTable-data continent">Africa</td>
            <td className="regionTable-data cases">
              {props.tableData.africa.cases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.africa.casesPerMil
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.africa.recovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.africa.recoveryPercent}%
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.africa.deaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data pop">
              {(Math.ceil(props.tableData.africa.pop / 1000000).toString() +
                "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>

          <tr className="regionTableRow asia">
            <td className="regionTable-data continent">Asia</td>
            <td className="regionTable-data cases">
              {props.tableData.asia.cases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.asia.casesPerMil
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.asia.recovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.asia.recoveryPercent}%
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.asia.deaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data pop">
              {(Math.ceil(props.tableData.asia.pop / 1000000).toString() +
                "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>

          <tr className="regionTableRow europe">
            <td className="regionTable-data continent">Europe</td>
            <td className="regionTable-data cases">
              {props.tableData.europe.cases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.europe.casesPerMil
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.europe.recovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.europe.recoveryPercent}%
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.europe.deaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data pop">
              {(Math.ceil(props.tableData.europe.pop / 1000000).toString() +
                "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>

          <tr className="regionTableRow oceania">
            <td className="regionTable-data continent">Oceania</td>
            <td className="regionTable-data cases">
              {props.tableData.oceania.cases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.oceania.casesPerMil
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.oceania.recovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.oceania.recoveryPercent}%
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.oceania.deaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data pop">
              {(Math.ceil(props.tableData.oceania.pop / 1000000).toString() +
                "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>

          <tr className="regionTableRow north-america">
            <td className="regionTable-data continent">North-America</td>
            <td className="regionTable-data cases">
              {props.tableData.northAmerica.cases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.northAmerica.casesPerMil
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.northAmerica.recovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.northAmerica.recoveryPercent}%
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.northAmerica.deaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data pop">
              {(Math.ceil(props.tableData.northAmerica.pop / 1000000).toString() +
                "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>

          <tr className="regionTableRow south-america">
            <td className="regionTable-data continent">South-America</td>
            <td className="regionTable-data cases">
              {props.tableData.southAmerica.cases
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.southAmerica.casesPerMil
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.southAmerica.recovered
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.southAmerica.recoveryPercent}%
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.southAmerica.deaths
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td className="regionTable-data pop">
              {(Math.ceil(props.tableData.southAmerica.pop / 1000000).toString() +
                "M")
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
