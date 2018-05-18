import React from 'react';
import fetch from '../../utils/fetch';

export default class extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      status: 'initial'
    };
  }

  onClick(event) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure about deleting this item?  This action cannot be undone.')) {
      this.setState({status: 'progress'});
      fetch(this.props.action, {method: 'DELETE'}).then(
        () => this.setState({status: 'deleted'})
      );
    }
  }

  render() {
    const {status} = this.state;
    if (status === 'initial')
      return <button onClick={this.onClick.bind(this)}>{this.props.children}</button>;
    else if (status === 'progress')
      return <button disabled={true}>Deleting...</button>;
    else if (status === 'deleted')
      return <button disabled={true}>Deleted</button>;
  }
}