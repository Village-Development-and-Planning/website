import React, {Component} from 'react';
import AppRouter from './AppRouter';
import Topbar from './Topbar';
import './Page.scss';

export default class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Topbar/>
        <div className="content">
          <AppRouter/>
        </div>
      </div>
    );
  }
}
