import React, {Component} from 'react';
import download from './../../images/download.png';
import exportData from './../../images/export.png';
import validate from './../../images/validate.png';
import visualization from './../../images/visualization.png';



export default class CTAColumn extends Component {

  render() {
    let img = {
      download,
      'export':exportData,
      validate,
      visualization
    };
    return (
      <div>
        <img src={img[this.props.type]} alt={this.props.type} />

          {this.props.type} option
      </div>
    );
  }
}