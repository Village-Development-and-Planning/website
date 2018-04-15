import React from 'react';

import Comp from './components/stats';

import {Header} from './../validation/style.scss';

export default class StatePage extends React.Component {
  componentDidMount() {}
  render() {
    return <React.Fragment>
      <div className={Header}>
        <h3>Tamil Nadu</h3>
      </div>
      <Comp key="theni" entityId="21"/>
      <Comp key="dharmapuri" entityId="09"/>
    </React.Fragment>;
  }
}
