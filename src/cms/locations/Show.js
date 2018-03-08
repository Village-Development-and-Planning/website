import React from 'react';
import ShowPage from '../base/Show';
import YAML from 'js-yaml';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      return (
        <div>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Type</h4>
          <p>{entity.type}</p>

          <h4>Code</h4>
          <p>{entity.code}</p>

          <h4>Unique ID</h4>
          <p>{entity.uid}</p>

          <h4>Payload</h4>
          <code><pre>
            {JSON.stringify(entity.payload, null, 2)}
          </pre></code>

          <h4>Aggregates</h4>
          <code><pre>
            {YAML.safeDump(entity.aggregates.map(
              ({type, key, data, metadata=null}) => 
              ({type, key, data, metadata})
            ))}
          </pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Location';