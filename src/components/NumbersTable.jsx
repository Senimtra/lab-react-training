// ##############################################
// ##  Iteration 12 - Component: NumbersTable  ##
// ##############################################

const NumbersTable = (props) => {
  const numbersArr = [...Array(props.limit).keys()].map((el) => ++el);
  return (
    <div id="numbers-table">
      {numbersArr.map((el) => (
        <div
          key={el}
          style={{ backgroundColor: el % 2 ? 'white' : 'red' }}
          id="number-block"
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
