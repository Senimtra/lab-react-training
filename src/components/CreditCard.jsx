// ###########################################
// ##  Iteration 5 - Component: CreditCard  ##
// ###########################################

const CreditCard = (props) => {
  return (
    <div id="credit-card" style={{ backgroundColor: props.bgColor }}>
      <div id="bank-logo">
        <img
          src={
            props.type === 'Visa' ? './img/visa.png' : './img/master-card.svg'
          }
          alt={props.type}
        ></img>
      </div>
      <div id="card-number">
        <div id="card-dots">
          {'•'.repeat(4)} {'•'.repeat(4)} {'•'.repeat(4)}{' '}
        </div>
        <div id="card-digits">{props.number.slice(-4)}</div>
      </div>
      <div id="card-data">
        Expires {props.expirationMonth.toString().padStart(2, '0')}/
        {props.expirationYear.toString().slice(-2)}
        {'\xa0'.repeat(5)}
        {props.bank}
        <br />
        {props.owner}
      </div>
    </div>
  );
};

export default CreditCard;
