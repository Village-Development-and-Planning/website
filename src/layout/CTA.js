import React, {Component} from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Responsive from '../components/Responsive/Responsive';
import CTAColumn from '../components/CTAColumn/CTAColumn';

import './CTA.scss';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Responsive classes="container cta">
          <CTAColumn type="download"/>
          <CTAColumn type="visualization"/>
          <CTAColumn type="export"/>
          <CTAColumn type="validate"/>
        </Responsive>
        <Footer/>
      </div>
    );
  }
}