import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: 0,
    };
  }

  leftClick = () => {
    this.setState({
      carousel:
        this.state.carousel === 0
          ? this.state.carousel + 3
          : this.state.carousel - 1,
    });
  };

  rightClick = () => {
    this.setState({
      carousel:
        this.state.carousel === 3
          ? this.state.carousel - 3
          : this.state.carousel + 1,
    });
  };

  render() {
    return (
      <div id="carousel">
        <img src={this.props.imgs[this.state.carousel]} alt="carousel" />
        <div>
          <button onClick={this.leftClick}>Left</button>
          <button onClick={this.rightClick}>Right</button>
        </div>
      </div>
    );
  }
}

export default Carousel;
