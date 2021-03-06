import React, { Component } from 'react';

import ActionButton from '../ActionButton';
import {
  Sidenav as styleSidenav,
  Navigations,
} from './Sidenav.scss';

import download from '../../images/download.png';
import upload from '../../images/upload.png';
import validate from '../../images/validate.png';
import visualization from '../../images/visualization.png';
import exportImg from '../../images/export.png';
import plan from '../../images/plan.png';
import home from '../../images/home.png';
import users from '../../images/users.png';

class Sidenav extends Component {
  render() {
    return (
      <div className={styleSidenav}>
        <div className={Navigations}>
          <ActionButton
            to="/"
            image={home}
            text="Home"
          />
          <ActionButton
            to="/upload"
            image={upload}
            text="Upload"
          />
          <ActionButton
            to="/download?enabled=true"
            image={download}
            text="Download"
          />
          <ActionButton
            to="/validation?enabled=true"
            image={validate}
            text="Validate"
          />
          <ActionButton
            to="/export?enabled=true"
            image={exportImg}
            text="Export"
          />
          <ActionButton
            href="/static/viz/index-demo.html"
            target="_blank"
            image={visualization}
            text="Visualizations"
          />
          <ActionButton
            to="/plans?type=plan"
            image={plan}
            text="Plans"
          />
          <ActionButton
            to="/users"
            image={users}
            text="Users"
          />
        </div>
      </div>
    );
  }
}

export default Sidenav;
