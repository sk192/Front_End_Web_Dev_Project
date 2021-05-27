import "./navbar.css";

function HeaderNav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-brand bg-dark">COVID-19 DASHBOARD</button>
        <div class="navbar-collapse collapse" id="collapsingNavbarMd">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <h4 class="links">Home</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/vaccination">
                <h4 class="links">Vaccination_Info</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/vaccineCompany">
                <h4 class="links">VaccineManufacturerInfo</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/covidInfo">
                <h4 class="links">covidInfo</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                <h4 class="links">About</h4>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default HeaderNav;
