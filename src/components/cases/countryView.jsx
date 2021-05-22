export default function CountryView(props) {
  console.log("inside country view ", props.match.params.countryName);
  return (
    <div>
      <h3>Country View of {props.match.params.countryName}</h3>
    </div>
  );
}
