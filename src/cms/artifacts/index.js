import React from 'react';
import {Route} from 'react-router-dom';
export default [
  [
    'artifacts/new',
    require('./New').default,
  ],
  [
    'artifacts/:entityId/edit',
    require('./Edit').default,
  ],
  [
    'artifacts/:entityId',
    require('./Show').default,
  ],
  [
    'artifacts',
    require('./List').default,
  ],        
].map(([key, component]) => {
  return <Route
  key={key} path={`/${key}`}
  component={component}
  />;
});