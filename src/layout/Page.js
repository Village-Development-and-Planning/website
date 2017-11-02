import React, {Component} from 'react';
import {Switch, Route} from 'react-router';

import Survey from '../pages/Survey';
import AppRouter from './AppRouter'
import './Page.scss';

export default class Page extends Component {
  render() {
    return (
      <div className="Page">
        <AppRouter/>
      </div>
    );
  }
}
