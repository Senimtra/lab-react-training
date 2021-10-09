// ###########################################
// ##  Iteration 8 - Component: LikeButton  ##
// ###########################################

import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      color: 0,
    };
  }

  incrementLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
      color:
        this.state.color < 5
          ? this.state.color + 1
          : this.state.color - this.state.color,
    });
  };

  render() {
    console.log('Rendering components');
    const buttonColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return (
      <button
        id="like-button"
        style={{ backgroundColor: buttonColors[this.state.color] }}
        onClick={this.incrementLikes}
      >
        {this.state.likes} Likes
      </button>
    );
  }
}

export default LikeButton;
