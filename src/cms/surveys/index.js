import React from 'react';
import {Route} from 'react-router-dom';

export default [
  [
    'surveys/new', 
    require('./New').default,
  ],
  [
    'surveys/:entityId/edit',
    require('./Edit').default,
  ],
  [
    'surveys/:entityId/answers',
    require('./Answers').default,
  ],
  [
    'surveys/:entityId',
    require('./Show').default,
  ],
  [
    'surveys',
    require('./List').default,
  ],
].map(([key, component]) => {
  return <Route 
    key={key} path={`/${key}`} 
    component={component}
  />;
});