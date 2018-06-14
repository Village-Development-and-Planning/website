import React, { Component } from 'react';

import fetch from '../../utils/fetch';
import {User} from './User.scss';
import {T, getLanguage} from '../../translations';

export default class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {user: null};
    fetch('/auth').then((res) => {
      this.setState({user: res});
    });
  }

  render() {
    let username, signout;
    if (this.state.user && this.state.user.name) username = this.state.user.name;
    if (!username) {
      username = <T>Guest</T>;
      signout = false;
    } else {
      signout = <a href="/auth/out"><T>Sign out</T></a>;
    }

    if (getLanguage() === 'tamil') {
      return <div className={User}>
        {username}
        <span className="full">-ஆக </span>
        <span className="clip">. </span>
        <span className="full"><T>Logged in as</T>.</span>
        <span> </span>
        {signout}
      </div>;
    } else {
      return <div className={User}>
        <span className="full"><T>Logged in as</T> </span>{username}.&nbsp;
        {signout}
      </div>;
    }
  }
}