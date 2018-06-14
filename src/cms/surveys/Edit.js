import React from 'react';
import EditPage from '../base/Edit';
import Form from './Form';

export default class SurvyeyPage extends EditPage {


  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    if (entity) {
      return (
        <Form
          method="PATCH"
          action={`/cms/${this.cmsRouteName}/${entityId}`}
          entity={entity}
          actionName='Update survey'
          title={`Update survey`}
        />
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
