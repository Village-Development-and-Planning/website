import React, {Component} from 'react';

import { Right, Topbar, Logo, Titles } from './Topbar.scss';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/tn_logo.svg';
import User from '../User';

import {setLanguage, t} from '../../translations';

export default class extends Component {

  setTitle(title) {
  }
  setActions(actions) {
  }

  onEnglish() {
    setLanguage('english');
  }

  onTamil() {
    setLanguage('tamil');
  }

  render() {
    return (
      <header className={Topbar}>
        <Link className={Logo} to="/">
          <img src={imgLogo} alt="TN Government Logo"/>
        </Link>
        <div className={Titles}>
          <h2>
            <span className="full">{t("Participatory Tracking")}</span>
            <span className="clip">{t("P-Tracking")}</span>
          </h2>
          <h3>
            <span className="full">
              {t("Tamil Nadu Village Development Planning")}
            </span>
            <span className="clip">
              {t("T.N.")} - {t("Village Development Planning")}
            </span>
          </h3>
        </div>
        <div className={Right}>
          <User/>
          <div>
            Language:&nbsp;
            <button onClick={this.onEnglish}>English</button>&nbsp;
            <button onClick={this.onTamil}>தமிழ்</button>
          </div>
        </div>
      </header>
    );
  }
}
