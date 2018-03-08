import React from 'react';
import EditPage from '../base/Edit';
import Form from '../../layout/AppForm';

export default class Edit extends EditPage {
  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    if (entity) {
      return <Form
        action={`/cms/locations/${entityId}`}
        actionName="Update"
        method="PATCH"
      >
        <h4 className="title">Update Location Data</h4>
        <label>
          <p>Name</p>
          <input 
            type="text" name="name"
            defaultValue={entity.name}
            placeholder="Enter name"
          />
        </label>
        <label>
          <p>Code</p>
          <input 
            type="text" name="code"
            defaultValue={entity.code}
            placeholder="Enter code"
          />
        </label>
        <label>
          <p>Unique ID</p>
          <input 
            type="text" name="name"
            defaultValue={entity.uid}
            placeholder="Enter uid"
          />
        </label>
      </Form>;
    } else {
      return super.render();
    }
  }

};
Edit.entityName = 'Location';