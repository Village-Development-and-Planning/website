import React from 'react';
import NewPage from '../base/New';
import Form from './Form';

export default class SurvyeyPage extends NewPage {

  handleSubmit(response) {
    this.setState({response});
  }

  render() {
    if (this.state.entity) {
      return (
        <Form 
          action="/cms/surveys" 
          handleSubmit={this.handleSubmit.bind(this)}
        >
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
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
