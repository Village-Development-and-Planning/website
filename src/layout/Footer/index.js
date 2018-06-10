import React, {Component} from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>
          © 2018 Madras Institute of Development Studies.
        </p>
        <p>
          Last Updated:  June, 2018.
        </p>
      </div>
    );
  }
}