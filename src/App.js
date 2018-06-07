import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { translate, Trans } from "react-i18next";

import './App.scss';

import Main from './layout/Main';

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <BrowserRouter basename="/admin">
        <Switch>
          <Route component={Main}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

// export default App;

export default translate("translations")(App);
