import React, {Component} from 'react';


import Sidenav from './Sidenav';
import Topbar from './Topbar';
import AppRouter from './AppRouter';

import './Main.scss';


export default class MainLayout extends Component {
    render() {
        return (
          <div className="Vertical">
            <Topbar ref={(e) => (this._topbar = e)}/>
            <div className="Horizontal">
              <Sidenav />
              <div className="Content">
                <AppRouter/>
              </div>
            </div>
          </div>
        );
    }
}