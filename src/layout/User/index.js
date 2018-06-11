import React, { Component } from 'react';

import fetch from '../../utils/fetch';
import {User} from './User.scss';
import {T} from '../../translations';

export default class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {user: null};
    fetch('/auth').then((res) => {
      this.setState({user: res});
    });
  }

  render() {
    if (this.state.user && this.state.user.name) {
      return <div className={User}>
        <span className="full"><T>Logged in as</T> </span>{this.state.user.name}.&nbsp;
        <a href="/auth/out"><T>Sign out</T></a>
      </div>;
    } else {
      return <p className={User}><T>Guest</T></p>;
    }
  }
}