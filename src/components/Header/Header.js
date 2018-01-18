import React, {Component} from 'react';
import AppLogo from './AppLogo';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <AppLogo/>
        <titles>
          <h1>தமிழ்நாடு அரசு</h1>
          <h1>TN VDP / P-Tracking</h1>
        </titles>
        <user-actions>
          {this.props.children}
        </user-actions>                
      </nav>
    );
  }
}