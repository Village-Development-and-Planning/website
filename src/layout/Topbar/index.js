import React, {Component} from 'react';

import { Right, Topbar, Logo, Titles } from './Topbar.scss';
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
          <h2>
            <span className="full">Participatory Tracking</span>
            <span className="clip">P-Tracking</span>
          </h2>
          <h3>
            <span className="full">
              Tamil Nadu - Village Development Planning
            </span>
            <span className="clip">
              TN - Village Development Planning
            </span>
          </h3>
        </div>
        <div className={Right}>
          <User/>
          <div>
            Language:&nbsp;
            <a href="">English</a>&nbsp;
            <a href="">Tamil</a>
          </div>
        </div>
      </header>
    );
  }
}
