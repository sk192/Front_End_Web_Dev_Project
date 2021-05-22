// import CasesIndex from "./casesIndex";
// import CasesHeading from "./casesHeading";
// import StatusCard from "./statusCard";
// import RegionBarGraph from "./regionStatus-barGraph";

// export default function MainGrid(props) {
//   // console.log("card data --> ", props.globalCardData);
//   return (
//     <div className="main-grid">
//       <section className="grid-container">
//         <div className="grid-item item1 side-nav">
//           <CasesIndex onRegionButttonClick={props.onRegionButttonClick} />
//         </div>
//         <div className="grid-item item2 card-1">
//           <StatusCard cardName="totalCases" data={props.globalCardData.cases} />
//         </div>
//         <div className="grid-item item3 card-2">
//           <StatusCard
//             cardName="activeCases"
//             data={props.globalCardData.actCases}
//           />
//         </div>
//         <div className="grid-item item4 card-3">
//           <StatusCard
//             cardName="recovered"
//             data={props.globalCardData.recovered}
//           />
//         </div>
//         <div className="grid-item item5 card-4">
//           <StatusCard cardName="deaths" data={props.globalCardData.deaths} />
//         </div>
//         <div className="grid-item item6 globel-barGraph">
//           <RegionBarGraph regionData={props.regionData} />
//         </div>
//         <div className="grid-item item7 region-table">7</div>
//         <div className="grid-item item8 region-graph-1">8</div>
//         <div className="grid-item item9 region-graph-2">9</div>
//         <div className="grid-item item10 cases-heading">
//           <CasesHeading regionSelected={props.regionSelected} />
//         </div>
//       </section>
//     </div>
//   );
// }
