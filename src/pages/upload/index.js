import React from 'react';
import {Route} from 'react-router-dom';

const routeName = '/upload/';

export default [
  <Route
    path={routeName} key={routeName} exact
    component={require('./landing.js').default}
  />,
  <Route
    path="/upload-data/" key="/upload-data" exact
    component={require('./data-landing.js').default}
  />
];