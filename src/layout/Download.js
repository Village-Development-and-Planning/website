import React, {Component} from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Responsive from '../components/Responsive/Responsive';
import Dropdown from '../components/Dropdown/Dropdown';

import './Dropdown.scss';

export default class Download extends Component {
  render() {

    let clusters = [
      {value: 'aa', displayValue: 'aa'},
      {value: 'bb', displayValue: 'bb'}
    ];
    let panchayats = [
      {value: 'aaa', displayValue: 'aaa'},
      {value: 'bbb', displayValue: 'bbb'}
    ];

    return (
      <div>
        <Header/>
        <h3>District Name</h3>
        <Responsive classes="container forms">
          <Dropdown label="Cluster Name" options={clusters}/>
          <Dropdown label="Panchayats Name" options={panchayats}/>
        </Responsive>
        <Footer/>
      </div>
    );
  }
}