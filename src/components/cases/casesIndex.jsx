import logo from "../images/virus-logo-1.png";

export default function CasesIndex() {
  return (
    <div className="cases-index-body">
      <div className="cases-index-logo">
        <figure class>
          <img src={logo} alt="virus-logo" className="cases-img-logo"  />
        </figure>
      </div>

      <div className="cases-index-content">
        <h1>Content</h1>
      </div>
    </div>
  );
}
