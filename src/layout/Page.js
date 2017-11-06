import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppRouter from './AppRouter';
import Topbar from './Topbar';
import './Page.scss';

export default class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Topbar ref={(e) => (this._topbar = e)}/>
        <div className="content">
          <AppRouter/>
        </div>
      </div>
    );
  }

  getChildContext() {
    return {topbar: () => this._topbar};
  }

  static childContextTypes = {
    topbar: PropTypes.func,
  }
}
