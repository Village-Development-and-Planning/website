import React from 'react';
import {Route} from 'react-router-dom';

import mappingRoutes from '../mapping';
import householdRoutes from '../household';

const routeName = '/validation';

export default [
  ...mappingRoutes,
  ...householdRoutes,
  <Route
    path={routeName} key={routeName} exact
    component={require('./landing').default}
  />
];