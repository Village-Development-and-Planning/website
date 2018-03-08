import React from 'react';
import ShowPage from '../base/Show';
import YAML from 'js-yaml';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;    
    if (entity) {
      let householdStats = entity.aggregates 
      && entity.aggregates.find((agg) => (
        (agg.type.search('Household') !== -1)
        && (agg.key.search('/') === -1)
      ));
      if (householdStats) {
        householdStats = householdStats.data;        
        let total = householdStats.numSurveys.value;
        let answered = householdStats.numAnswered.value;        
        householdStats = <React.Fragment>
          <h4>Household Statistics</h4>
          <p>Total surveyed: {total}<br/>
          Answered surveys: {answered} ({answered/total*100}%)</p>
        </React.Fragment>;
      }
      return (
        <div>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Code / Username</h4>
          <p>{entity.username}</p>

          <h4>Roles</h4>
          <p>{(entity.roles || []).join(', ')}</p>          
          {householdStats}

          <h4>Payload</h4>
          <code><pre>
            {JSON.stringify(entity.payload, null, 2)}
          </pre></code>

          <h4>Aggregates</h4>
          <code><pre>
            {YAML.safeDump(entity.aggregates.map(
              ({type, key, metadata, data}) =>
                ({type, key, metadata, data})
            ))}
          </pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Surveyor';
