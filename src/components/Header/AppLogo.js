import React, {Component} from 'react';
import styles from './AppLogo.scss';
import logo from '../../images/tn_logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.AppLogo}>
        <img src={logo} alt="TN Government Logo"/>
      </div>
    );
  }
}
