import React from 'react';
import {Route} from 'react-router-dom';
export default [
  [
    'plans/new',
    require('./New').default,
  ],
  [
    'plans/:entityId/edit',
    require('./Edit').default,
  ],
  [
    'plans/:entityId',
    require('./Show').default,
  ],
  [
    'plans',
    require('./List').default,
  ],
].map(([key, component]) => {
  return <Route
  key={key} path={`/${key}`}
  component={component}
  />;
});