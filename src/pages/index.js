import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import uploadRoutes from './upload';
import downloadRoutes from './download';

import cmsRoutes from '../cms';


const landing = <Route
  path="/" exact key="/"
  component={require('./landing').default}
/>;

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {[
          ...cmsRoutes,

          ...uploadRoutes,
          ...downloadRoutes,
          landing,
        ]}
      </Switch>
    );
  }
}
