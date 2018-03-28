import React from 'react';
import ShowPage from '../base/Show';
import { get } from 'lodash';

import fetch from "../../utils/fetch";
import SurveyorAggregate from './../surveyors/SurveyorAggregate';


import L from 'leaflet';

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


			      return  <SurveyorAggregate surveyor={surveyorData}  aggregate={householdStats}/>

			      })}

	      </div>
      );
    } else {
      return super.render();
    }
  }

  componentDidUpdate() {
    const entity = this.state.entity;
    if (!entity) return;

    const aggregates = entity.aggregates;
    if (!aggregates) return;

    const agg = aggregates.find(({type}) => (type.endsWith('/Household')));
    if (!agg) return;

    const locations = agg.data && agg.data.locations;
    if (!locations || !locations.value || !locations.count) return;
    let avgLat = 0, avgLong = 0, len = 0;

    const markers = [];
    const map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for(let key of Object.keys(locations.value)) {
      let [lat, long] = key.split(',');
      if (!lat || !long) continue;
      lat = parseInt(lat, 10) / 10000;
      long = parseInt(long, 10) / 10000;
      avgLat += lat;
      avgLong += long;
      len = len + 1;
      markers.push(
        L.marker(
          [lat, long]
        ).addTo(map)
      );
    }
    avgLat /= len;
    avgLong /= len;

    map.fitBounds(
      (new L.featureGroup(markers)).getBounds().pad(0.1)
    );
  }
  
};
Show.entityName = 'Location';


