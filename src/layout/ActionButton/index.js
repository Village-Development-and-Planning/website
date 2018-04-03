import React, {Component} from 'react';
import {ActionButton} from './ActionButton.scss';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    if (this.props.to) {
      return (
        <Link className={ActionButton} to={this.props.to}>
          <div>{this.props.text}</div>
        </Link>
      );
    }
  }
}