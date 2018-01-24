import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import uploadRoutes from './upload';

import cmsSurveysRoutes from '../cms/surveys';
import cmsAnswersRoutes from '../cms/answers';

const landing = <Route
  path="/" exact key="/"
  component={require('./landing').default}
/>;

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {[
          ...uploadRoutes,
          ...cmsSurveysRoutes,
          ...cmsAnswersRoutes,
          landing,
        ]}
      </Switch>
    );
  }
}
