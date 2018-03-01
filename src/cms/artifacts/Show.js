import React from 'react';
import ShowPage from '../base/Show';

import {Artifact} from './Show.scss';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      return (
        <div className={Artifact}>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Description</h4>
          <p>{entity.description}</p>

          <h4>Image</h4>
          <img 
            src={`data:${entity.mimeType};base64,${entity.dataBase64}`}
            alt={entity.name}
          />
          <p>Mime type: {entity.mimeType}</p>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Artifact';
