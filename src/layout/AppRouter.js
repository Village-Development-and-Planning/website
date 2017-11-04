import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

const appRoutes = [
  {
    route: 'surveys',
    list: require('../pages/surveys/List').default,
    show: require('../pages/surveys/Show').default,
  }
]

/**
 * App admin page router
 */
export default class AppRouter extends Component {
  render() {
    return (
      <Switch> {
        appRoutes.map(
          (r) => [
            <Route key={r.route} path={`/${r.route}/:entityId`} 
              component={r.show}/>,
            <Route key={r.route} path={`/${r.route}`} 
              component={r.list}/>,     
          ]
        )
      }</Switch>
    );
  }
}