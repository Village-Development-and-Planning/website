import React from 'react';
import {Route} from 'react-router-dom';

const routeName = '/validation/mapping';
const mappingRouteName = `${routeName}/:entityId`;

export default [
  <Route
    path={mappingRouteName} key={mappingRouteName}
    component={require('../mapping/block').default}
  />,
  <Route
    path={routeName} key={routeName} exact
    component={require('./landing').default}
  />
];

