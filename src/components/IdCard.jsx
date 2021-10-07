// #######################################
// ##  Iteration 1 - Component: IdCard  ##
// #######################################

const IdCard = (props) => {
  return (
    <div id="id-card">
      <div>
        <img src={props.picture} alt={props.firstName}></img>
      </div>
      <div id="id-data">
        <div>
          <strong>First name:</strong>
          {props.firstName}
        </div>
        <div>
          <strong>Last name:</strong>
          {props.lastName}
        </div>
        <div>
          <strong>Gender:</strong>
          {props.gender}
        </div>
        <div>
          <strong>Height:</strong>
          {props.height}
        </div>
        <div>
          <strong>Birth:</strong>
          {props.birth.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default IdCard;
