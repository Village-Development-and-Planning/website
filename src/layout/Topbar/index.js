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
          <h2>
            பங்கேற்புடன் கூடிய கண்காணிப்பு
            <span className="full">தமிழ்நாடு கிராம வளர்ச்சிக்கான திட்டமிடல்</span>
          </h2>
          <h3>
            Participatory Tracking
            <span className="full">Tamil Nadu Village Development Planning</span>
          </h3>
        </div>
        <User/>
      </header>
    );
  }
}
