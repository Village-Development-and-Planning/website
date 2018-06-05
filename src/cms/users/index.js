import React from 'react';
import {Route} from 'react-router-dom';
export default [
  [
    'users/new',
    require('./New').default,
  ],
  [
    'users/:entityId/edit',
    require('./Edit').default,
  ],
  [
    'users/:entityId',
    require('./Show').default,
  ],
  [
    'users',
    require('./List').default,
  ],
].map(([key, component]) => {
  return <Route
  key={key} path={`/${key}`}
  component={component}
  />;
});