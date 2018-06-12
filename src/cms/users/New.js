import React from 'react';
import NewBase from '../base/New';
import Form from './Form';

export default class NewPage extends NewBase {
    render() {
      return (
        <Form
          action="/cms/users"
          actionName="Upload New User"
        >
        </Form>
      );
    }
};
NewPage.entityName = 'User';;
