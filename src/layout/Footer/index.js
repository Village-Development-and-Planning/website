import React, {Component} from 'react';
import './Footer.scss';
import {T} from '../../translations';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>
          © 2018 <T>Madras Institute of Development Studies</T>.
        </p>
        <p>
          <T>Last Updated</T>:  June, 2018.
        </p>
      </div>
    );
  }
}