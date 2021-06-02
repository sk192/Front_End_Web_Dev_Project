
// import pic1 from "../components/images/shweta.JPG";
import pic2 from "../components/images/pic2.jpg";

export default function About() {
  return (
    <div className="about-body" role="contentinfo">
      <div className="aboutCard about1">
        <img src={pic2} alt="shwetha-Avatar" className="aboutImg"  />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Shweta Korulkar</b>
          </h4>
          <p className="about-task">
            Task: VaccinationInfo, Vaccine Manufacture and Home page
          </p>
          <a
            href="https://github.com/sk192"
            className="about-gitrepo-link"
          >
            GitHub{" "}
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="aboutCard about2">
        <img src={pic2} alt="vandana-Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Sree Vandana</b>
          </h4>
          <p className="about-task">
            Task: Cases Status (global View and Country View) and About Page
          </p>
          <a
            href="https://github.com/Sree-Vandana"
            className="about-gitrepo-link"
          >
            GitHub
            <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
