import React from 'react';
import NewPage from '../base/New';
import Form from './Form';

export default class ArtifactPage extends NewPage {
    render() {
      return (
        <Form
          action="/cms/artifacts"
          actionName="Upload image"
          location={this.props.location}
          title="Create new image"
          description="Upload images that are part of your survey. This should be the same name as what is in the survey CSV file."
          fileInputMessage="Upload images that are part of your survey"
        />
      );
    }
};
ArtifactPage.entityName = 'Artifact';
