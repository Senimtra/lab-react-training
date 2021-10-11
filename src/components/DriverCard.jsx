// ###########################################
// ##  Iteration 7 - Component: DriverCard  ##
// ###########################################

const DriverCard = (props) => {
  return (
    <div id="driver-card">
      <div id="driver-container">
        <div id="driver-img">
          <img src={props.img} alt="" />
        </div>
        <div id="driver-data">
          <div id="driver-name">{props.name}</div>
          <div id="driver-rating">
            {'★'.repeat(Math.round(props.rating)).padEnd(5, '☆')}
          </div>
          <div id="driver-car">
            {props.car.model} - {props.car.licensePlate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
