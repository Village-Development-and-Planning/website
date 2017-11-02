import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './Sidenav.scss';

class Sidenav extends Component {
  render() {
    return (
      <div className="Sidenav">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="title">
            <h3>P-Tracking</h3>
            <h4>Administraion</h4>
          </div>
        </div>
        <div className="separator"/>
        <nav className="navigations">
          <Link to="/surveys">Surveys</Link>
          <Link to="/surveyors">Surveyors</Link>
          <Link to="/answers">Answers</Link>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
