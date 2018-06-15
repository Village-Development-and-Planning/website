import React from 'react';
import fetch from '../../utils/fetch';

import Response from './Response';
import {AppForm} from './style.scss';
import {T} from '../../translations';

export {Response};
export default class Form extends React.Component {

  constructor(...args) {
    super(...args);
    this.method = this.props.method
      || 'POST';
    this.action = this.props.action;
    this.children = this.props.children;
    const submitButtonClassName = 'action';
    const disabledSubmitButton = this.props.disabledSubmitButton === true ? true : false;

    this.submit = this.props.submit
    || (<button type="submit" className={submitButtonClassName} disabled={disabledSubmitButton}>
      <T>
        {this.props.actionName || 'Submit'}
      </T>
    </button>);
    this.state = {response: false};

  }

  handleError(err) {
    if (this.props.handleError) {
      return this.props.handleError(err);
    }
    return {component: err.component || <Response
      statusClass="error" key="status"
      statusMessage={`${err.status}: ${err.statusText}`}
    />};
  }

  handleResponse(res) {
    if (this.props.handleResponse) {
      res = this.props.handleResponse(res);
    }
    if (!res) return;
    if (!res.component) {
      res.component = <Response
        statusMessage="Success!"
      />;
    }
    if (!this.props.actionOnce)
      this._disableSubmit(false);
    this.setState({response: res.component});
  }

  handleRequest(...args) {
    this._disableSubmit();
    return (this.props.handleRequest || fetch)(...args);
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
        acceptCharset="utf-8"
      >
        <input type="hidden" name="_charset_" value="utf-8"/>
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