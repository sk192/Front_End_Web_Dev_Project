export default function RegionTableData(props) {
  // console.log("in regional table --> ", props);
  return (
    <div className="globalRegionTable">
      <table id="regionTable">
        <thead className="regionTable-head">
          <tr className="regionTableRow zero">
            <th className="regionTable-heading">Continent</th>
            <th className="regionTable-heading">Total-Cases</th>
            <th className="regionTable-heading">Cases-per-Million</th>
            <th className="regionTable-heading">Recovered</th>
            <th className="regionTable-heading">Recovery-Percentage</th>
            <th className="regionTable-heading">Deaths</th>
            <th className="regionTable-heading">Population</th>
          </tr>
        </thead>

        <tbody>
          <tr className="regionTableRow first africa">
            <td className="regionTable-data continent">Africa</td>
            <td className="regionTable-data cases">
              {props.tableData.africa.cases}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.africa.casesPerMil}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.africa.recovered}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.africa.recoveryPercent}
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.africa.deaths}
            </td>
            <td className="regionTable-data pop">
              {props.tableData.africa.pop}
            </td>
          </tr>

          <tr className="regionTableRow asia">
            <td className="regionTable-data continent">Asia</td>
            <td className="regionTable-data cases">
              {props.tableData.asia.cases}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.asia.casesPerMil}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.asia.recovered}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.asia.recoveryPercent}
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.asia.deaths}
            </td>
            <td className="regionTable-data pop">{props.tableData.asia.pop}</td>
          </tr>

          <tr className="regionTableRow europe">
            <td className="regionTable-data continent">Europe</td>
            <td className="regionTable-data cases">
              {props.tableData.europe.cases}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.europe.casesPerMil}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.europe.recovered}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.europe.recoveryPercent}
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.europe.deaths}
            </td>
            <td className="regionTable-data pop">
              {props.tableData.europe.pop}
            </td>
          </tr>

          <tr className="regionTableRow oceania">
            <td className="regionTable-data continent">Oceania</td>
            <td className="regionTable-data cases">
              {props.tableData.oceania.cases}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.oceania.casesPerMil}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.oceania.recovered}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.oceania.recoveryPercent}
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.oceania.deaths}
            </td>
            <td className="regionTable-data pop">
              {props.tableData.oceania.pop}
            </td>
          </tr>

          <tr className="regionTableRow north-america">
            <td className="regionTable-data continent">North-America</td>
            <td className="regionTable-data cases">
              {props.tableData.northAmerica.cases}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.northAmerica.casesPerMil}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.northAmerica.recovered}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.northAmerica.recoveryPercent}
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.northAmerica.deaths}
            </td>
            <td className="regionTable-data pop">
              {props.tableData.northAmerica.pop}
            </td>
          </tr>

          <tr className="regionTableRow south-america">
            <td className="regionTable-data continent">South-America</td>
            <td className="regionTable-data cases">
              {props.tableData.southAmerica.cases}
            </td>
            <td className="regionTable-data cases-per-mil">
              {props.tableData.southAmerica.casesPerMil}
            </td>
            <td className="regionTable-data recovered">
              {props.tableData.southAmerica.recovered}
            </td>
            <td className="regionTable-data recovered-percent">
              {props.tableData.southAmerica.recoveryPercent}
            </td>
            <td className="regionTable-data deaths">
              {props.tableData.southAmerica.deaths}
            </td>
            <td className="regionTable-data pop">
              {props.tableData.southAmerica.pop}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
