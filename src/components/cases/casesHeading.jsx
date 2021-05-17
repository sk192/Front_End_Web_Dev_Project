export default function CasesHeading(props) {
  if (props.regionSelected === "world") {
    return (
      <div className="cases-heading">
        <h2>Global OverView</h2>
      </div>
    );
  } else if (props.regionSelected === "af") {
    return (
      <div className="cases-heading">
        <h2>Africa</h2>
      </div>
    );
  } else if (props.regionSelected === "as") {
    return (
      <div className="cases-heading">
        <h2>Asia</h2>
      </div>
    );
  } else if (props.regionSelected === "au") {
    return (
      <div className="cases-heading">
        <h2>Australia</h2>
      </div>
    );
  } else if (props.regionSelected === "eu") {
    return (
      <div className="cases-heading">
        <h2>Europe</h2>
      </div>
    );
  } else if (props.regionSelected === "sa") {
    return (
      <div className="cases-heading">
        <h2>South America</h2>
      </div>
    );
  } else if (props.regionSelected === "na") {
    return (
      <div className="cases-heading">
        <h2>North America</h2>
      </div>
    );
  }
}
