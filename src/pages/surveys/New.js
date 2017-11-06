import React from 'react';
import NewPage from '../base/New';
import Form from '../base/Form';

export default class SurvyeyPage extends NewPage {

  render() {
    if (this.state.entity) {
      return (
        <Form
          method="POST" 
          encType="multipart/form-data"
          action="/cms/surveys/"
          ref={(f) => (this.form = f)}
        >
          <label>
            Name
            <input type="text" name="surveyName"/>
          </label>
          <label>
            Description
            <input type="text" name="surveyDescription"/>
          </label>
          <label>
            CSV Upload
            <input type="file" name="survey"/>
          </label>
          <button type="submit">
            Create
          </button>
        </Form>
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
