// #######################################
// ##  Iteration 6 - Component: Rating  ##
// #######################################

const Rating = (props) => {
  return (
    <div id="rating">
      {'★'.repeat(Math.round(props.children)).padEnd(5, '☆')}
    </div>
  );
};

export default Rating;
