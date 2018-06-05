import React from 'react';
import EditPage from '../base/Edit';
import Form from './Form';

export default class Edit extends EditPage {
  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    if (entity) {
      return <Form
        action={`/cms/users/${entityId}`}
        actionName="Update"
        method="PATCH"
        entity={entity}
      />;
    } else {
      return super.render();
    }
  }

};
Edit.entityName = 'User';
