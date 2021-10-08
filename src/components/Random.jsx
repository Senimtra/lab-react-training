// #######################################
// ##  Iteration 3 - Component: Random  ##
// #######################################

const Random = (props) => {
  return (
    <div id="random">
      Random value between {props.min} and {props.max}
      {' => '}
      {Math.ceil(Math.random() * props.max)}
    </div>
  );
};

export default Random;
