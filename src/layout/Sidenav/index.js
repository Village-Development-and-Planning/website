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
            altText="Home"
            text="Home"
          />
          <ActionButton
            to="/upload"
            image={upload}
            altText="Upload Survey and Related Data"
            text="Upload"
          />
          <ActionButton
            to="/surveys"
            image={download}
            altText="Download Survey Applications"
            text="Download"
          />
          <ActionButton
            to="/surveys/new"
            image={validate}
            altText="Validate Survey Responses"
            text="Validate"
          />
          <ActionButton
            to="/surveys/new"
            image={exportImg}
            altText="Export Survey Resopnses"
            text="Export"
          />
          <ActionButton
            to="/surveys/new"
            image={visualization}
            altText="Visualize Survey Responses"
            text="Visualizations"
          />
          <ActionButton
            to="/surveys/new"
            image={plan}
            altText="View Action Plan"
            text="Plan"
          />
        </div>
      </div>
    );
  }
}

export default Sidenav;
