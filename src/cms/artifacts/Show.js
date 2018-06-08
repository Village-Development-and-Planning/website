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
          <p>{entity.name} (extension {entity.extension}; type {entity.mimeType})</p>

          <h4>Description</h4>
          <p>{entity.description}</p>

          <h4>Image</h4>
          <img
            src={`/cms/${this.cmsRouteName}/${entity._id}/download`}
            alt={entity.name}
          />
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Artifact';
