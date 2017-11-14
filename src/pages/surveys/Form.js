import React from 'react';
import Form from '../base/Form';
import fetch from '../../utils/fetch';

export default class SurvyeyPage extends React.Component {
  handleRequest(action, opts) {
    if (this.uploadFileInput.files.length === 0) {
      opts.body.delete('csv');
    }
    return fetch(action, opts);
  }

  render() {
    return (
      <Form
        method={this.props.method || 'POST'}
        encType="multipart/form-data"
        action={this.props.action}
        handleRequest={this.handleRequest.bind(this)}
        handleSubmit={this.props.handleSubmit}
      >
        <label>
          Name
          <input 
            type="text" 
            name="name"
            defaultValue={this.props.objName}
          />
        </label>
        <label>
          Description
          <input 
            type="text" 
            name="description"
            defaultValue={this.props.objDescription}
          />
        </label>
        <label>
          Enabled
          <input 
            type="checkbox" 
            name="enabled" 
            value="1"
            defaultChecked={this.props.objEnabled}
          />
        </label><br/>        
        <label>
          CSV Upload
          <input ref={(r) => this.uploadFileInput = r} type="file" name="csv"/>
        </label>
        <button type="submit">
          {this.props.actionName || 'Create'}
        </button><br/>
        {this.props.children}
      </Form>
    );
  }
};
