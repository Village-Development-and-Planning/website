import React, {Component} from 'react';
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
