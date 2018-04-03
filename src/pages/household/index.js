import React from 'react';
import {Route} from 'react-router-dom';

const routeName = '/validation/household';
const districtRouteName = `${routeName}/district/:entityId`;
const stateRouteName = `${routeName}/state`;

export default [
  <Route
    path={districtRouteName} key={districtRouteName}
    component={require('../household/district').default}
  />,
  <Route
    path={stateRouteName} key={stateRouteName}
    component={require('../household/state').default}
  />,
  <Route
    path={routeName} key={routeName} exact
    component={require('./landing').default}
  />
];

