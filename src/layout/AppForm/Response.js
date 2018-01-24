import React from 'react';

import {Response} from './style.scss';

export default class extends React.Component {
  render() {
    return (
      <div className={Response}>
        <p className={this.props.statusClass}>{this.props.statusMessage}</p>
        {this.props.children}
      </div>
    );
  }
}
