import React from 'react';

import ShowPage from '../../cms/base/Show';
import PanchayatComp from './components/panchayat';

import {Header} from './style.scss';

export default class MappingBlockPage extends ShowPage {
  render() {
    const entity = this.state.entity;
    if (!entity) return super.render();
    const {payload, children} = entity;
    return <React.Fragment>
      <div className={Header}>
        <h3>{entity.name}</h3>
        <h3>{payload.DISTRICT_NAME}</h3>
      </div>
      <div>
        {children.map(
          c => <PanchayatComp key={c.uid} entityId={c.uid}/>
        )}
      </div>
    </React.Fragment>;
  }
}

Object.assign(MappingBlockPage, {
  entityName: 'Location',
});