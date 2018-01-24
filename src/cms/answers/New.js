import React from 'react';
import NewPage from '../base/New';
import Form from './Form';

export default class AnswerPage extends NewPage {


  render() {
    if (this.state.entity) {
      return (
        <Form 
          action="/cms/answers"
          actionName="Upload"
        />
      );
    } else {
      return super.render();
    }
  }

};
AnswerPage.entityName = 'Answer';
