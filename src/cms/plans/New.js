import React from 'react';
import NewPage from '../base/New';
import Form from './Form';
import {t} from '../../translations';

export default class ArtifactPage extends NewPage {
    render() {
      return (
        <Form
          action="/cms/artifacts"
          actionName={t("Upload plan")}
          location={this.props.location}
          title={t("Upload plan")}
          description={t("Upload a new plan, this will allow you to view the plan and keep track of developments.")}
          fileInputMessage={t("Upload plan")}
          multiple={false}
        />
      );
    }
};
ArtifactPage.entityName = 'Artifact';
