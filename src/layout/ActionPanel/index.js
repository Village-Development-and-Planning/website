import React, {Component} from 'react';
import {ActionPanel} from './ActionPanel.scss';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    if (this.props.to) {
      return (
        <Link className={ActionPanel} to={this.props.to}>
          {this.props.text && <h3>{this.props.text}</h3>}
          <img src={this.props.image} alt={this.props.altText} />
          {this.props.children}
        </Link>
      );
    }
  }
}