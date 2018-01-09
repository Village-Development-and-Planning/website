import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import PageCombo from './layout/PageCombo';
import Login from './layout/Login';
import CTA from './layout/CTA';
import Download from './layout/Download';



class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/admin">
        <Switch>
          <Route path="/download" component={Download}/>
          <Route path="/login" component={Login}/>
          <Route path="/cta" component={CTA}/>
          <Route component={PageCombo}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
