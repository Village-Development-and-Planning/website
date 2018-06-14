import React from 'react';
import ShowPage from '../base/Show';
import {Link} from 'react-router-dom';
import _ from 'lodash';

function uidToPath(code) {
  return code.replace(/\//g, '_');
}

export default class Show extends ShowPage {

  render() {
    const types = 'DISTRICT BLOCK PANCHAYAT HABITATION'.split(' ');
    let entity = this.state.entity;
    if (!entity) return super.render();
    const type = entity.type;
    const tIndex = types.indexOf(type);
    const cType = ((tIndex !== -1) && (tIndex < types.length -1))
      ? types[tIndex + 1] : 'Location';
    const cLabel = _.capitalize(`${cType}s covered`);
    return (
      <div>
        <h4>{_.capitalize(`${type} name`)}</h4>
        <p>{entity.uid} - {entity.name}</p>

        <h4>{cLabel}</h4>
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


