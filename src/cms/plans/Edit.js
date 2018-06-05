import React from 'react';
import EditPage from '../base/Edit';
import Form from './Form';

export default class Edit extends EditPage {
  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    if (entity) {
      return (
        <Form
          action={`/cms/artifacts/${entityId}`}
          actionName="Update plan"
          multiple={false}
          method="PATCH"
          entity={entity}
          location={this.props.location}
          title="Edit plan"
          fileInputMessage="Edit plan"
        />
      );
    } else {
      return super.render();
    }
  }

};
Edit.entityName = 'Artifact';
