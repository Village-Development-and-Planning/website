import React from 'react';
import ShowPage from '../base/Show';

export default class SurvyeyShow extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      return (
        <div>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Description</h4>
          <p>{entity.description}</p>

          <h4>Enabled</h4>
          <p>{entity.enabled ? 'Yes' : 'No'}</p>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyShow.entityName = 'Survey';
