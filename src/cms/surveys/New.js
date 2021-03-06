import React from 'react';
import NewPage from '../base/New';
import Form from './Form';

export default class SurvyeyPage extends NewPage {


  render() {
    if (this.state.entity) {
      return (
        <Form
          action="/cms/surveys"
          actionName="Create survey"
          title="Create a new survey"
        />
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
