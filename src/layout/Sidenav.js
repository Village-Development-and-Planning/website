import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.scss';

import download from '../images/download.png';
import survey from '../images/survey.png';

class Sidenav extends Component {
  render() {
    return (
      <div className="Sidenav">
        <nav className="Navigations">
          <Link to="/surveys">
            <img src={survey} alt="List Surveys"/>
          </Link>
          <Link to="/surveyors">
            <img src={download} alt="List Surveys"/>
          </Link>
          <Link to="/answers">
            <img src={download} alt="List Surveys"/>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
