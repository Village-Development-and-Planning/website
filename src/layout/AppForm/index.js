import React from 'react';
import fetch from '../../utils/fetch';

import Response from './Response';
import {AppForm} from './style.scss';

export default class Form extends React.Component {

  constructor(...args) {
    super(...args);
    this.method = this.props.method
      || 'POST';
    this.action = this.props.action;
    this.children = this.props.children;

    this.submit = this.props.submit 
      || (
            <button type="submit">
              {this.props.actionName || 'Submit'}
            </button>
    );
    this.state = {response: false};
  }

  handleError(err) {
    if (!err.component) {
      err.component = <Response 
        statusClass="error" key="status"
        statusMessage={`${err.status}: ${err.statusText}`}
      />;
    }
    return err;
  }

  handleResponse(res) {
    if (!res) return;
    if (!res.component) {
      res.component = <Response 
        statusClass="success" key="status"
        statusMessage="Success!"
      />;
    }
    this._disableSubmit(false);
    this.setState({response: res.component});
  }
  
  handleRequest(...args) {
    this._disableSubmit();
    return fetch(...args);
  }

  onSubmit(evt) {
    evt.preventDefault();
    
    this.handleRequest.call(this, this.action, {
      method: this.method,
      body: new FormData(this.form),
    })
    .catch(this.handleError.bind(this))
    .then(this.handleResponse.bind(this));    
  }

  render() {
    return (
      <form 
        ref={(f) => (this.form = f)}
        onSubmit={(e) => this.onSubmit(e)}
        className={this.props.className || AppForm}
      >
        {this.children}
        {this.submit}
        {this.state.response}
      </form>
    );  
  }

  _disableSubmit(val=true) {
    const btn = this.form.querySelectorAll('[type="submit"]')[0];
    if (!btn) return;
    btn.disabled = val;
  }
  
}