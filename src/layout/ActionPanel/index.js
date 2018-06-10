import React, {Component} from 'react';
import {ActionPanel} from './ActionPanel.scss';
import { Link } from 'react-router-dom';
import {t, T} from '../../translations';

export default class extends Component {
  render() {
    if (this.props.to) {
      return <Link className={ActionPanel} to={this.props.to}>
        {this.props.text && <h3>{t(this.props.text)}</h3>}
        <img src={this.props.image} alt={this.props.text} />
        {this.props.children}
      </Link>;
    } else if (this.props.href) {
      return <a className={ActionPanel} href={this.props.href}>
        {this.props.text && <h3>{t(this.props.text)}</h3>}
        <img src={this.props.image} alt={this.props.text} />
        {this.props.children}
      </a>;
    }
  }
}