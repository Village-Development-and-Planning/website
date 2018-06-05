import React from 'react';
import ShowPage from '../base/Show';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (!entity) return super.render();
    return (
      <div>
        <h4>Name</h4>
        <p>{entity.name}</p>

        <h4>Code</h4>
        <p>{entity.username}</p>

        <h4>Survey</h4>
        <p>{entity.payload.SURVEY}</p>

        <h4>District</h4>
        <p>{entity.payload.DISTRICT_NAME}</p>

        <h4>Block</h4>
        <p>{entity.payload.BLOCK_NAME}</p>

        <h4>Panchayat</h4>
        <p>{entity.payload.PANCHAYAT_NAME}</p>
      </div>
    );
  }
};
Show.entityName = 'Surveyor';
