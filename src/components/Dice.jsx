// ######################################
// ##  Iteration 10 - Component: Dice  ##
// ######################################

import React from 'react';

const diceSides = [
  './img/dice-empty.png',
  './img/dice1.png',
  './img/dice2.png',
  './img/dice3.png',
  './img/dice4.png',
  './img/dice5.png',
  './img/dice6.png',
];

class Dice extends React.Component {
  state = {
    diceImg: diceSides[Math.floor(Math.random() * 6) + 1],
  };

  clickDice = () => {
    this.setState({
      diceImg: diceSides[0],
    });
    setTimeout(() => {
      this.throwDice();
    }, 1000);
  };

  throwDice = () => {
    this.setState({
      diceImg: diceSides[Math.floor(Math.random() * 6) + 1],
    });
  };

  render() {
    return (
      <div id="dice">
        <img src={this.state.diceImg} alt="dice-img" onClick={this.clickDice} />
      </div>
    );
  }
}

export default Dice;
