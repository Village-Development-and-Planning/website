import React, {Component} from 'react';
import {ActionButton} from './ActionButton.scss';
import { Link } from 'react-router-dom';

import {t} from '../../translations';

export default class extends Component {
  render() {
    if (this.props.to) {
      return (
        <Link className={ActionButton} to={this.props.to}>
          <img src={this.props.image} alt={this.props.text} />
          <div>{t(this.props.text)}</div>
        </Link>
      );
    } else if (this.props.href) {
      return <a className={ActionButton} href={this.props.href}>
        <img src={this.props.image} alt={this.props.text}/>
        <div>{t(this.props.text)}</div>
      </a>;
    }
  }
}