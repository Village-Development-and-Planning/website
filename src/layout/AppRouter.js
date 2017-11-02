import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

const appRoutes = [
  {route: 'surveys', component: require('../pages/Survey').default}
]

/**
 * App admin page router
 */
export default class AppRouter extends Component {
  render() {
    return (
      <Switch> {
        appRoutes.map(
          (r) => <Route path={`/${r.route}`} component={r.component}/>
        )
      } </Switch>
    );
  }
}