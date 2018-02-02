import React from 'react';
import NewPage from '../base/New';
import Form from './Form';

export default class ArtifactPage extends NewPage {


    render() {
      return (
        <Form
          action="/cms/artifacts"
          actionName="Upload"
        />
      );
    }

};
ArtifactPage.entityName = 'Artifact';
