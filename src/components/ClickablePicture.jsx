// ######################################
// ##  Iteration 9 - ClickablePicture  ##
// ######################################

import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
    };
  }

  changeImage = () => {
    this.setState({
      img:
        this.state.img === this.props.img
          ? this.props.imgClicked
          : this.props.img,
    });
  };

  render() {
    return (
      <img
        id="clickable-image"
        src={this.state.img}
        alt="clickable-pic"
        onClick={this.changeImage}
      />
    );
  }
}

export default ClickablePicture;
