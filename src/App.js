import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Main from './layout/Main';


class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/admin">
        <Switch>
          <Route component={Main}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
