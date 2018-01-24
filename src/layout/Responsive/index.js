import React, {Component} from 'react';
import {Responsive} from './Responsive.scss';

export default class extends Component {
  render() {
    return (
      <div className={Responsive}>
        {this.props.children}
      </div>
    );
  }
}
