import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import uploadRoutes from './upload';
import validationRoutes from './validation';

import cmsRoutes from '../cms';


const landing = <Route
  path="/" exact key="/"
  component={require('./landing').default}
/>;
const dLanding = <Route
  path="/download" exact key="/download"
  component={require('./download-landing').default}
/>;

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {[
          ...cmsRoutes,

          ...uploadRoutes,
          ...validationRoutes,
          dLanding,
          landing,
        ]}
      </Switch>
    );
  }
}
