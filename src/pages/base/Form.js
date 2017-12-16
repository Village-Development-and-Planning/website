import React from 'react';
import fetch from '../../utils/fetch';

export default class Form extends React.Component {
  handleSubmit(evt) {
    evt.preventDefault();
    (this.props.handleRequest || fetch)(this.props.action, {
      method: this.props.method || 'POST',
      body: new FormData(this.form),
    }).then((res) => {
      this.props.handleSubmit && this.props.handleSubmit(res);
    });
  }

  render() {
    const {action, encType, method} = this.props;
    return (
      <form {...{action, encType, method}}
        ref={(f) => (this.form = f)}
        onSubmit={(e) => this.handleSubmit(e)}
      >
        {this.props.children}
      </form>
    );  
  }
}