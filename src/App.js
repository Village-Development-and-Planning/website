import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import PageCombo from './layout/PageCombo';
import Login from './layout/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/admin">
          <Switch>
            <Route path="/" exact component={PageCombo}/>
            <Route path="/login" component={Login}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
