// #########################################
// ##  Iteration 4 - Component: BoxColor  ##
// #########################################

const BoxColor = (props) => {
  return (
    <div
      id="box-color"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      <div id="color-text">
        rgb({props.r},{props.g},{props.b})<br />#
        {props.r.toString(16).padStart(2, '0')}
        {props.g.toString(16).padStart(2, '0')}
        {props.b.toString(16).padStart(2, '0')}
      </div>
    </div>
  );
};

export default BoxColor;
