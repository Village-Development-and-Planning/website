import React, {Component} from 'react';
export default class Download extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select
          value="test">
          <option value="Select">Select</option>
          {this.props.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      </div>
        );
  }
}