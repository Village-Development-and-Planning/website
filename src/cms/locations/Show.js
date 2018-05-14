import React from 'react';
import ShowPage from '../base/Show';
import {Link} from 'react-router-dom';

function uidToPath(code) {
  return code.replace(/\//g, '_');
}

export default class Show extends ShowPage {

  render() {
    let entity = this.state.entity;
    if (!entity) return super.render();
    return (
      <div>
        <h4>Name</h4>
        <p>{entity.name}</p>

        <h4>Type</h4>
        <p>{entity.type}</p>

        <h4>Code</h4>
        <p>{entity.code} {(entity.type !== 'DISTRICT' && `(uid: ${entity.uid})`)}</p>

        <h4>Sub-Locations</h4>
        {entity.children.map(
          c => <p key={c.uid}>
            <Link to={`/locations/${uidToPath(c.uid)}`}>{c.name}</Link>
          </p>
        )}
      </div>
    );
  }

};
Show.entityName = 'Location';


