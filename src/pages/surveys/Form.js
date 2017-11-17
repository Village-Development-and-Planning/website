import React from 'react';
import Form from '../base/Form';
import fetch from '../../utils/fetch';

export default class SurvyeyPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {response: null};
  }

  handleRequest(action, opts) {
    if (this.uploadFileInput.files.length === 0) {
      opts.body.delete('csv');
    }
    return fetch(action, opts);
  }

  handleSubmit(response) {
    this.setState({response});
  }

  render() {
    return (
      <Form
        method={this.props.method || 'POST'}
        encType="multipart/form-data"
        action={this.props.action}
        handleRequest={this.handleRequest.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
      >
        <label>
          Name
          <input 
            type="text" 
            name="name"
            defaultValue={this.props.entity && this.props.entity.name}
          /><br/>
        </label>
        <label>
          Description
          <input 
            type="text" 
            name="description"
            defaultValue={this.props.entity && this.props.entity.description}
          /><br/>
        </label><br/>
        <label>
          Respondents
          <input 
            type="text" 
            name="respondents"
            defaultValue={this.props.entity && this.props.entity.respondents}
          /><br/>
        </label>        
        <label>
          Enabled
          <input 
            type="checkbox" 
            name="enabled" 
            value="1"
            defaultChecked={this.props.entity && this.props.entity.enabled}
          /><br/>
        </label><br/>        
        <label>
          CSV Upload
          <input ref={(r) => this.uploadFileInput = r} type="file" name="csv"/>
        </label>
        <button type="submit">
          {this.props.actionName || 'Create'}
        </button><br/>
        <label>
          Response
          <pre>
            {JSON.stringify(
              this.state.response, 
              null, 2,
            )}
          </pre>
        </label>
      </Form>
    );
  }
};
