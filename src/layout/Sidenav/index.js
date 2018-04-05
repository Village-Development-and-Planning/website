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
            text="Create Surveys"
          />
          <ActionButton
            href="/static/VDP-Android.apk"        
            image={download}
            text="Download"
          />
          <ActionButton
            to="/upload-data"
            image={upload}
            text="Upload Data"
          />
          <ActionButton
            to="/validation"
            image={validate}
            text="Validate"
          />
          <ActionButton
            to="/surveys/new"
            image={exportImg}
            text="Export"
          />
          <ActionButton
            to="/surveys/new"
            image={visualization}
            text="Visualizations"
          />
          <ActionButton
            to="/surveys/new"
            image={plan}
            text="Plan"
          />
        </div>
      </div>
    );
  }
}

export default Sidenav;
