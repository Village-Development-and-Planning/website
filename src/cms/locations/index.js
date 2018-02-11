import React from 'react';
import {Route} from 'react-router-dom';
export default [
  [
    'locations/new',
    require('./New').default,
  ],
  [
    'locations/:entityId/edit',
    require('./Edit').default,
  ],
  [
    'locations/:entityId',
    require('./Show').default,
  ],
  [
    'locations',
    require('./List').default,
  ],        
].map(([key, component]) => {
  return <Route
  key={key} path={`/${key}`}
  component={component}
  />;
});