import React, {Component} from 'react';

import AppRouter from '../../pages';
import Sidenav from '../Sidenav';
import Topbar from '../Topbar';
import Footer from '../Footer';
import './Main.scss';
import {setNotify} from '../../translations';

import {parse} from 'query-string';

export default class MainLayout extends Component {

  constructor() {
    super(...arguments);

    const language = parse(
      this.props.location.search,
      {ignoreQueryPrefix: true}
    ).lang || null;

    this.state = {language};
  }

  componentDidMount() {
    setNotify(this.onLanguageChange.bind(this));
  }

  onLanguageChange(language) {
    console.log('Language changed: ', language);
    this.setState({language});
  }

  render() {
    return (
      <div className="Vertical">
        <Topbar ref={(e) => (this._topbar = e)}/>
        <div className="Horizontal">
          <Sidenav />
          <div className="Content">
            <AppRouter />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  // static childContextTypes = {
  //   translate: PropTypes.func,
  // }
}