import React from 'react';
import ShowPage from '../base/Show';


export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      return (
        <div>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Code / Username</h4>
          <p>{entity.username}</p>

          <h4>Roles</h4>
          <p>{(entity.roles || []).join(', ')}</p>

          <h4>Payload</h4>
          <code><pre>
            {JSON.stringify(entity.payload, null, 2)}
          </pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Surveyor';
