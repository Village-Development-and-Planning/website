import React from 'react';
import NewPage from '../base/New';
import Form from './Form';

export default class ArtifactPage extends NewPage {
    render() {
      return (
        <Form
          action="/cms/artifacts"
          actionName="Upload plan"
          location={this.props.location}
          title="Upload plan"
          description="Upload a new plan, this will allow you to view the plan and keep track of developments."
          fileInputMessage="Upload plan"
          multiple={false}
        />
      );
    }
};
ArtifactPage.entityName = 'Artifact';
