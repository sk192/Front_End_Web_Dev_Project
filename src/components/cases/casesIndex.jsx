import logo from "../images/virus-logo-1.png";

export default function CasesIndex(props) {
  return (
    <div className="cases-index-body">
      <section className="grid-index-container">
        <div className="grid-index-item index-item1 index-pic">
          <figure className="virus-fig-tag">
            <img src={logo} alt="virus-logo" className="cases-img-logo" />
            <figcaption className="cases-pic-head">
              <h3>COVID-19 Data</h3>
            </figcaption>
          </figure>
        </div>
        <div className="grid-index-item index-item2  index-choose-head">
          <h4>Select Region</h4>
        </div>
        <div className="grid-index-item index-item3  index-region-2">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("world")}
          >
            World
          </button>
        </div>
        <div className="grid-index-item index-item4  index-region-3">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("af")}
          >
            Africa
          </button>
        </div>
        <div className="grid-index-item index-item5  index-region-4">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("as")}
          >
            Asia
          </button>
        </div>
        <div className="grid-index-item index-item6  index-region-5">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("au")}
          >
            Australia
          </button>
        </div>
        <div className="grid-index-item index-item7  index-region-6">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("eu")}
          >
            Europe
          </button>
        </div>
        <div className="grid-index-item index-item8  index-region-7">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("sa")}
          >
            South America
          </button>
        </div>
        <div className="grid-index-item index-item9  index-region-8">
          <button
            type="button"
            className="btn btn-primary btn-lg index-nav-btn"
            onClick={() => props.onRegionButttonClick("na")}
          >
            North America
          </button>
        </div>
      </section>
    </div>
  );
}
