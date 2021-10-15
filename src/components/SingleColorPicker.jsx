// ################################################
// ##  Iteration 16 - Component: RGBColorPicker  ##
// ################################################

import React from 'react';

class SingleColorPicker extends React.Component {
  render() {
    return (
      <div>
        <div className="color-container">
          <div
            className="color-box"
            style={{
              backgroundColor: `rgb(${this.props.red}, 0, 0)`,
            }}
          ></div>
          <div className="color-input">R:</div>
          <div>
            <input
              type="number"
              name="rValue"
              value={this.props.red}
              onChange={this.props.onColorChange}
            />
          </div>
        </div>
        <div className="color-container">
          <div
            className="color-box"
            style={{
              backgroundColor: `rgb(0, ${this.props.green}, 0)`,
            }}
          ></div>
          <div className="color-input">G:</div>
          <div>
            <input
              type="number"
              name="gValue"
              value={this.props.green}
              onChange={this.props.onColorChange}
            />
          </div>
        </div>
        <div className="color-container">
          <div
            className="color-box"
            style={{
              backgroundColor: `rgb(0, 0, ${this.props.blue})`,
            }}
          ></div>
          <div className="color-input">B:</div>
          <div>
            <input
              type="number"
              name="bValue"
              value={this.props.blue}
              onChange={this.props.onColorChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleColorPicker;
