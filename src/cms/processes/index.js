import React from 'react';
import {Route} from 'react-router-dom';
export default [
  [
    'processes/:entityId',
    require('./Show').default,
  ],
  [
    'processes',
    require('./List').default,
  ],        
].map(([key, component]) => {
  return <Route
  key={key} path={`/${key}`}
  component={component}
  />;
});