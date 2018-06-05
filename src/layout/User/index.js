import React, { Component } from 'react';

import fetch from '../../utils/fetch';
import {User} from './User.scss';

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
        <span className="full">Logged in as </span>{this.state.user.name}.&nbsp;
        <a href="/auth/out">Sign out</a>
      </div>;
    } else {
      return <p className={User}>Guest</p>;
    }
  }
}