import React from 'react';
import fetch from '../../utils/fetch';
import {T, t} from '../../translations';

export default class extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      status: 'initial'
    };
  }

  onClick(event) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(t('Are you sure about deleting this item?  This action cannot be undone.'))) {
      this.setState({status: 'progress'});
      fetch(this.props.action, {method: 'DELETE'}).then(
        () => this.setState({status: 'deleted'}),
        () => this.setState({status: 'forbidden'}),
      );
    }
  }

  render() {
    const {status} = this.state;
    if (status === 'initial')
      return <button onClick={this.onClick.bind(this)}>{this.props.children}</button>;
    else if (status === 'progress')
      return <button disabled={true}><T>Deleting</T>...</button>;
    else if (status === 'deleted')
      return <button disabled={true}><T>Deleted</T></button>;
    else if (status === 'forbidden')
      return <button disabled={true}><T>Unauthorized</T></button>;
  }
}