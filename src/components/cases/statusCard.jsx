export default function StatusCard(props) {
  console.log(props.data);
  if (props.cardName === "totalCases") {
    return (
      <div className="statusCard totalCases">
        <h3>Total Cases</h3>
        <i className="fas fa-globe-americas"></i>
        <h3>
          {props.data.totalCases}
          <span> +{props.data.newCases}</span>
        </h3>
        <h3>{props.data.totalCasesPerMil} per 1Mil</h3>
      </div>
    );
  }
  if (props.cardName === "activeCases") {
    return (
      <div className="statusCard activeCases">
        <h3>Active Cases</h3>
        <i className="fas fa-head-side-mask"></i>
        <h3>{props.data.activeCases}</h3>
        <h3>{props.data.seriousCritical} seriously critical</h3>
      </div>
    );
  }
  if (props.cardName === "recovered") {
    return (
      <div className="statusCard recovered">
        <h3>Recovered</h3>
        <i className="fas fa-heart"></i>

        <h3>
          {props.data.totalRecovered}
          <span> +{props.data.newlyRecovered}</span>
        </h3>
        <h3>{props.data.recoveredPercent}% recovered</h3>
      </div>
    );
  }
  if (props.cardName === "deaths") {
    return (
      <div className="statusCard deaths">
        <h3>Deaths</h3>
        <i className="fas fa-skull-crossbones"></i>

        <h3>
          {props.data.totalDeaths}
          <span> +{props.data.newDeaths}</span>
        </h3>
        <h3>{props.data.deathsPerMil} per 1Mil</h3>
      </div>
    );
  }
  // return <div></div>;
}
