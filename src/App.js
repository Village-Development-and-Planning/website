import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import Sidenav from './layout/Sidenav';
import Page from './layout/Page'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/admin">
        <div className="App">
          <Sidenav />
          <Page />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
