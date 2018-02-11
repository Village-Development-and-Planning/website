import React from 'react';
import {Route} from 'react-router-dom';
export default [
  [
    'surveyors/new',
    require('./New').default,
  ],
  [
    'surveyors/:entityId/edit',
    require('./Edit').default,
  ],
  [
    'surveyors/:entityId',
    require('./Show').default,
  ],
  [
    'surveyors',
    require('./List').default,
  ],        
].map(([key, component]) => {
  return <Route
  key={key} path={`/${key}`}
  component={component}
  />;
});