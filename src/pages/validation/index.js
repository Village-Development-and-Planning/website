import React from 'react';
import {Route} from 'react-router-dom';

import mappingRoutes from '../mapping';

const routeName = '/validation';

export default [
  ...mappingRoutes,
  <Route
    path={routeName} key={routeName} exact
    component={require('./landing').default}
  />
];