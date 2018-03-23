import React from 'react';
import ShowPage from '../base/Show';
import { get } from 'lodash';

import fetch from "../../utils/fetch";
import SurveyorAggregate from './../surveyors/SurveyorAggregate';


export default class Show extends ShowPage {



	setupObject() {
		const entityId = this.props.match.params.entityId;
		return fetch(`/cms/${this.routeName}/${entityId}`)
			.then((entity) => {

				let householdSurveyors = entity.aggregates
					&& entity.aggregates.find((agg) => (
						(agg.type.search('/HouseholdSurveyors') !== -1)
					));

				let surveyors = get(householdSurveyors,"data.idSpec.value",{});
				let promises = [];
				Object.keys(surveyors).forEach(function(surveyorId) {
					promises.push(fetch(`/cms/surveyors/${surveyorId}`));
				});

				return Promise.all(promises).then(surveyorsData => {
					entity.surveyerEntity = surveyorsData;
					return ({entity});
				});
			});
	}


  render() {
    let entity = this.state.entity;
	  if (entity) {

		  let surveyorsEntity = entity.surveyerEntity;

		  console.info(surveyorsEntity);

      return (

	      <div>

		      <h3><span>{entity.payload.PANCHAYAT_NAME}</span><span>{entity.payload.BLOCK_NAME}</span><span>{entity.payload.DISTRICT_NAME}</span></h3>
		      {surveyorsEntity.map(surveyor => {
			      let surveyorData = {};
			      let householdStats = surveyor.aggregates
				      && surveyor.aggregates.find((agg) => (
					      (agg.type.search('Household') !== -1)
					      && (agg.key.search('/') === -1)
				      ));
			      if (householdStats) {
				      householdStats = householdStats.data;
				      surveyorData.total =  householdStats.numSurveys.value;
				      surveyorData.answered = householdStats.numAnswered.value;
			      }
			      surveyorData.name = surveyor.name;
			      surveyorData.username = surveyor.username;
			      surveyorData.roles = (surveyor.roles || []).join(', ');


			      return surveyor.aggregates.map(aggregateData => <SurveyorAggregate surveyor={surveyorData}  aggregate={aggregateData}/>)

			      })}}

	      </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Location';


