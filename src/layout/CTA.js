import React, {Component} from 'react';

import Header from '../components/Header/Header';
import Footer from './Footer';
import Responsive from '../components/Responsive/Responsive';
import CTAColumn from './ActionButton';

import './CTA.scss';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Responsive classes="container cta">
          <CTAColumn text="download"/>
          <CTAColumn type="visualization"/>
          <CTAColumn type="export"/>
          <CTAColumn type="validate"/>
        </Responsive>
        <Footer/>
      </div>
    );
  }
}