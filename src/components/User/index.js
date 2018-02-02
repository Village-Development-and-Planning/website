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
      return <p className={User}>
        {this.state.user.name} 
      </p>;
    } else {
      return <p className={User}>Guest</p>;
    }
  }
}