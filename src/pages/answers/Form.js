import React from 'react';
import Form from '../base/Form';

export default class AnswerPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {response: null};
  }

  setResponse(response) {
    this.setState({response});
  }


  render() {
    return (
      <Form
        method={this.props.method || 'POST'}
        encType="multipart/form-data"
        action={this.props.action}
        handleRequest={
          this.props.handleRequest 
          && this.props.handleRequest.bind(this)
        }
        handleSubmit={this.setResponse.bind(this)}
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
        {this.props.children}     
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
