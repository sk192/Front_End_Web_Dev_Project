export default function StatusCards(props) {
  return (
    <div className="statusCardContainer">
      <div className="cases-card card-item-1">
        <div className="statusCardHead-container">
          <h3 className="statusCardHead cases">Total Cases</h3>
          <span>
            <i className="fas fa-globe-americas emoji cases"></i>
          </span>
        </div>
        <h2 className="statusCard-number">
          {props.totalCases
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </h2>
        <p>
          {props.casesPerMil
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
          cases per Mil
        </p>
      </div>

      <div className="recovered-card card-item-2">
        <div className="statusCardHead-container">
          <h3 className="statusCardHead recover">Recovered</h3>
          <span>
            <i className="fas fa-heart emoji recover"></i>
          </span>
        </div>
        <h2 className="statusCard-number">
          {props.totalRecovered
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </h2>
        <p>{props.recoveryPercent}% recovery</p>
      </div>

      <div className="deaths-card card-item-3">
        <div className="statusCardHead-container">
          <h3 className="statusCardHead death">Deaths</h3>
          <span>
            <i className="fas fa-skull-crossbones emoji death"></i>
          </span>
        </div>
        <h2 className="statusCard-number">
          {props.totalDeaths
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </h2>
        <p>
          {props.deathsPerMil
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
          deaths per Mil
        </p>
      </div>
    </div>
  );
}
