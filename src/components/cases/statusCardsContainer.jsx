export default function StatusCards(props) {
  return (
    <div className="statusCardContainer">
      <div className="cases-card">
        <div className="statusCardHead-container">
          <h3 className="statusCardHead cases">Total Cases</h3>
          <span>
            <i className="fas fa-globe-americas emoji cases"></i>
          </span>
        </div>
        <h2>
          {props.totalCases}
        </h2>
        <p>{props.casesPerMil} cases per Mil</p>
      </div>

      <div className="recovered-card">
        <div className="statusCardHead-container">
          <h3 className="statusCardHead recover">Recovered</h3>
          <span>
            <i className="fas fa-heart emoji recover"></i>
          </span>
        </div>
        <h2>
          {props.totalRecovered}
        </h2>
        <p>{props.recoveryPercent}% recovery</p>
      </div>

      <div className="deaths-card">
        <div className="statusCardHead-container">
          <h3 className="statusCardHead death">Deaths</h3>
          <span>
            <i className="fas fa-skull-crossbones emoji death"></i>
          </span>
        </div>
        <h2>
          {props.totalDeaths}
        </h2>
        <p>{props.deathsPerMil} deaths per Mil</p>
      </div>
    </div>
  );
}
