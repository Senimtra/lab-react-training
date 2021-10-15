// ################################################
// ##  Iteration 16 - Component: RGBColorPicker  ##
// ################################################

import React from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends React.Component {
  state = {
    rValue: 255,
    gValue: 150,
    bValue: 0,
  };

  changeColorValue = (event) => {
    let { name, value } = event.target;
    if (value > 255) value = 255;
    if (value < 0) value = 0;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div id="rgb-color-picker">
        <SingleColorPicker
          red={this.state.rValue}
          green={this.state.gValue}
          blue={this.state.bValue}
          onColorChange={this.changeColorValue}
        />
        <div id="rgb-output">
          <div
            id="color-box-rgb"
            className="color-box"
            style={{
              backgroundColor: `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`,
            }}
          ></div>
          <div id="color-code">
            rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})
          </div>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
