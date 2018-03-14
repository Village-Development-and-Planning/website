import React from 'react';
import ShowPage from '../base/Show';


export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      if (entity.startDate && entity.endDate) {
        entity.duration = new Date(entity.endDate) - new Date(entity.startDate);
        entity.duration = entity.duration / 1000 / 60;
      }
      return (
        <div>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Status</h4>
          <p>{entity.status}</p>

          <h4>Start Date</h4>
          <p>{entity.startDate}</p>
          <h4>End Date</h4>
          <p>{entity.endDate}</p>
          {(entity.startDate && entity.endDate &&
            <React.Fragment>
              <h4>Duration</h4>
              <p>{entity.duration} minutes</p>
            </React.Fragment>
          )}
          <h4>Args</h4>
          <code><pre>
            {JSON.stringify(entity.args)}
          </pre></code>      

          <h4>Output</h4>
          <code><pre>{entity.stdout}
          </pre></code>

          <h4>Error Log</h4>
          <code><pre>{entity.stderr}
          </pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
Show.entityName = 'Process';
Show.routeName = 'processes';
