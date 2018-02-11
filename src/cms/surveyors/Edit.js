import React from 'react';
import EditPage from '../base/Edit';
import Form from '../../layout/AppForm';

export default class Edit extends EditPage {
  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    if (entity) {
      return <Form
        action={`/cms/surveyors/${entityId}`}
        actionName="Update"
        method="PATCH"
      >
        <h4 className="title">Update Surveyor Information</h4>
        <label>
          <p>Name</p>
          <input 
            type="text" name="name"
            defaultValue={entity.name}
            placeholder="Enter name"
          />
        </label>
        <label>
          <p>Code / Username</p>
          <input 
            type="text" name="username"
            defaultValue={entity.username}
            placeholder="Enter username"
          />
        </label>
      </Form>;
    } else {
      return super.render();
    }
  }

};
Edit.entityName = 'Surveyor';
