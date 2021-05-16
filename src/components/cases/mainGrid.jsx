import CasesIndex from "./casesIndex";

export default function MainGrid() {
  return (
    <div className="main-grid">
      <section className="grid-container">
        <div className="grid-item item1 side-nav">
          
          <CasesIndex />
        
        </div>
        <div className="grid-item item2 card-1">2</div>
        <div className="grid-item item3 card-2">3</div>
        <div className="grid-item item4 card-3">4</div>
        <div className="grid-item item5 card-4">5</div>
        <div className="grid-item item6 globel-map">6</div>
        <div className="grid-item item7 region-table">7</div>
        <div className="grid-item item8 region-graph-1">8</div>
        <div className="grid-item item9 region-graph-2">9</div>
        <div className="grid-item item10 cases-heading">10</div>
      </section>
    </div>
  );
}
