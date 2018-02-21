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

          <h4>Status</h4>
          <p>{entity.status}</p>

          <h4>Args</h4>
          <code><pre>
            {JSON.stringify(entity.args)}
          </pre></code>      

          <h4>Output</h4>
          <code><pre>{entity.stdout}
          </pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Process';
Show.routeName = 'processes';
