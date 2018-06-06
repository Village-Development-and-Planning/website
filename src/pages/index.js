import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import uploadRoutes from './upload';
import validationRoutes from './validation';
import vizRoutes from './visualizations';
import cmsRoutes from '../cms';
import downloadRoutes from './download';


const landing = <Route
  path="/" exact key="/"
  component={require('./landing').default}
/>;

const exportLanding =  <Route
path="/export" exact key="/export"
component={require('./export').default}
/>;

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {[
          ...cmsRoutes,
          ...uploadRoutes,
          ...downloadRoutes,
          ...validationRoutes,
          ...vizRoutes,
          landing,
          exportLanding,
        ]}
      </Switch>
    );
  }
}
