import React from 'react';
import ShowPage from '../base/Show';
import ActionButton from '../../layout/ActionButton';

export default class SurvyeyPage extends ShowPage {
  _actions() {
    const entityId = this.props.match.params.entityId;    
    return [
      <ActionButton 
        key="downloadCSV"
      ><a href={`/cms/surveys/${entityId}/download`}>
        Download</a></ActionButton>,
    ].concat(super._actions());
  }
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
SurvyeyPage.entityName = 'Survey';
