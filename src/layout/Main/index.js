import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppRouter from '../../pages';
import Sidenav from '../Sidenav';
import Topbar from '../Topbar';
import Footer from '../Footer';
import './Main.scss';

export default class MainLayout extends Component {
  render() {
      return (
        <div className="Vertical">
          <Topbar ref={(e) => (this._topbar = e)}/>
          <div className="Horizontal">
            <Sidenav />
            <div className="Content">
              <AppRouter />
            </div>
          </div>
          <Footer/>
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