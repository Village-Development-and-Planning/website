import React from 'react';
import {Route} from 'react-router-dom';

const routeName = '/validation/household';

export default [
  <Route
    path={routeName} key={routeName}
    component={require('./landing').default}
  />
];

