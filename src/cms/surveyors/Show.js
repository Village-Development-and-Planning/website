import React from 'react';
import ShowPage from '../base/Show';
import SurveyorAggregate from './SurveyorAggregate';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    let surveyorData = {};

    if (entity) {
      let householdStats = entity.aggregates 
      && entity.aggregates.find((agg) => (
        (agg.type.search('Household') !== -1)
        && (agg.key.search('/') === -1)
      ));
      if (householdStats) {
        householdStats = householdStats.data;
        surveyorData.total =  householdStats.numSurveys.value;
        surveyorData.answered = householdStats.numAnswered.value;
      }
        surveyorData.name = entity.name;
        surveyorData.username = entity.username;
        surveyorData.roles = (entity.roles || []).join(', ');
      return (


          <div>
              <h3><span>Panchayat Name</span><span>Block Name</span><span>District Name</span></h3>
              {entity.aggregates.map(aggregateData => <SurveyorAggregate surveyor={surveyorData}  aggregate={aggregateData}/>)}

          </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Surveyor';
