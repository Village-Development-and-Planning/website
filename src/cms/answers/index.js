import React from 'react';
import {Route} from 'react-router-dom';

export default [
  [
    'answers/new', 
    require('./New').default,
  ],
].map(([key, component]) => {
  return <Route 
    key={key} path={`/${key}`} 
    component={component}
  />;
});