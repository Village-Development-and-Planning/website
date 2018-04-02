import React, {Component} from 'react';

import { Topbar, Logo, Titles } from './Topbar.scss';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/tn_logo.svg';
import User from '../User';

export default class extends Component {

  setTitle(title) {
  }
  setActions(actions) {
  }

  render() {
    return (
      <header className={Topbar}>
        <Link className={Logo} to="/">
          <img src={imgLogo} alt="TN Government Logo"/>
        </Link>
        <div className={Titles}>
          <h2>தமிழ்நாடு அரசு</h2>
          <h2>TN VDP / P-Tracking</h2>
        </div>
        <User/>
      </header>
    );
  }
}
