import logo from "../images/virus-logo-1.png";

export default function CasesIndex() {
  return (
    <div className="cases-index-body">
      <div className="cases-index-logo">
        <figure class>
          <img src={logo} alt="virus-logo" className="cases-img-logo" />
        </figure>
      </div>

      <div className="cases-index-content">
        <h5>Choose Region</h5>
        <ul>
          <li>World</li>
          <li>Africa</li>
          <li>Asia</li>
          <li>Australia</li>
          <li>Europe</li>
          <li>SouthAmerica</li>
          <li>NorthAmerica</li>
        </ul>
      </div>
    </div>
  );
}
