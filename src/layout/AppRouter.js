import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

const appRoutes = [
  {
    route: 'surveys',
    list: require('../pages/surveys/List').default,
    show: require('../pages/surveys/Show').default,
    new: require('../pages/surveys/New').default,
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
            r.new && <Route key={r.route} path={`/${r.route}/new`} 
              component={r.new}/>,
            r.show && <Route key={r.route} path={`/${r.route}/:entityId`} 
              component={r.show}/>,
            r.list && <Route key={r.route} path={`/${r.route}`} 
              component={r.list}/>,
          ]
        )
      }</Switch>
    );
  }
}