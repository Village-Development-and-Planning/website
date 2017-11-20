import React from 'react';
import ShowPage from '../base/Show';
import fetch from '../../utils/fetch';
import ActionButton from '../../layout/ActionButton';

export default class AnswerPage extends ShowPage {
  _actions() {
    const entityId = this.props.match.params.entityId;    
    return [
      <ActionButton 
        key="downloadCSV"
      ><a href={`/cms/answers/${entityId}/download`}>
        Download</a></ActionButton>,
    ].concat(super._actions());
  }
  setupObject() {
    return super.setupObject().then(({entity}) => {
      if (entity.survey) {
        return fetch(`/cms/surveys/${entity.survey}`)
          .then((survey) => {
            entity.surveyEntity = survey;
            return {entity};
          }).catch(()=>{
            entity.surveyEntity = {name: 'Not found!'};
            return {entity};
          });
      }
      return {entity};
    });
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

          <h4>Survey</h4>
          <p>{entity.surveyEntity.name}</p>
          
          <h4>Answer Object</h4>
          <p>
            {entity.rootQuestion ? "Exists" : "(null)"}
          </p>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
AnswerPage.entityName = 'Answer';
