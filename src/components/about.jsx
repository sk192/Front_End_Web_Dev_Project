
import pic from "../components/images/pic1.jpg";

export default function About() {
  return (
    <div className="about-body">
      <div className="aboutCard about1">
        <img src={pic} alt="Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Shweta Korulkar</b>
          </h4>
          <p className="about-task">Task: VaccinationInfo Page and Home page</p>
          <a href="https://github.com/sk192" className="about-gitrepo-link">
            GitHub
          </a>
        </div>
      </div>
      <div className="aboutCard about2">
        <img src={pic} alt="Avatar" className="aboutImg" />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Sree Vandana</b>
          </h4>
          <p className="about-task">Task: Cases Status Page and About Page</p>
          <a
            href="https://github.com/Sree-Vandana"
            className="about-gitrepo-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
