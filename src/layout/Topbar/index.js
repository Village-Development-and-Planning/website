import React, {Component} from 'react';

import ActionButton from '../ActionButton';
import { Topbar, Logo, Titles, Actions } from './Topbar.scss';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/tn_logo.svg';

export default class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: "Administration",
      actions: [],
      userAction: (<ActionButton to="/hello">Sign out</ActionButton>),
    };
  }

  setTitle(title) {
    this.setState({title});
  }
  setActions(actions) {
    this.setState({actions});
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
        <div className={Actions}>
          {this.state.actions}
        </div>
        {/* {this.state.actions}
        {this.state.userAction} */}
      </header>
    );
  }
}
