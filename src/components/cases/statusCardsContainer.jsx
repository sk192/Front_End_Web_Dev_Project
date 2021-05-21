export default function StatusCards(props) {
  return (
    <div className="statusCardContainer">
      <div className="cases-card">
        <h3 className="statusCardHead">Total Cases</h3>
        <span>
          <i className="fas fa-globe-americas emoji"></i>
        </span>
        <h2>{props.totalCases}</h2>
        <p>{props.casesPerMil} cases per Mil</p>
      </div>
      <div className="recovered-card">
        <h3 className="statusCardHead">Recovered</h3>
        <span>
          <i className="fas fa-heart emoji"></i>
        </span>
        <h2>{props.totalRecovered}</h2>
        <p>{props.recoveryPercent}% recovery</p>
      </div>
      <div className="deaths-card">
        <h3 className="statusCardHead">Deaths</h3>
        <span>
          <i className="fas fa-skull-crossbones emoji"></i>
        </span>
        <h2>{props.totalDeaths}</h2>
        <p>{props.deathsPerMil} deaths per Mil</p>
      </div>
    </div>
  );
}
