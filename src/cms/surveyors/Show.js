import React from 'react';
import ShowPage from '../base/Show';
import {t, T} from '../../translations';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (!entity) return super.render();
    return (
      <div>
        <h4><T>Name</T></h4>
        <p><T>{entity.name}</T></p>

        <h4><T>Code</T></h4>
        <p><T>{entity.username}</T></p>

        <h4><T>Survey</T></h4>
        <p><T>{entity.payload.SURVEY}</T></p>

        <h4><T>District</T></h4>
        <p><T>{entity.payload.DISTRICT_NAME}</T></p>

        <h4><T>Block</T></h4>
        <p><T>{entity.payload.BLOCK_NAME}</T></p>

        <h4><T>Panchayat</T></h4>
        <p><T>{entity.payload.PANCHAYAT_NAME}</T></p>
      </div>
    );
  }
};
Show.entityName = 'Surveyor';
