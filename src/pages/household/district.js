import React from 'react';

import ShowPage from '../../cms/base/Show';
import Comp from './components/stats';

import {Header} from './../validation/style.scss';

export default class HouseholdBlockPage extends ShowPage {
  render() {
    const entity = this.state.entity;
    if (!entity) return super.render();
    const {children} = entity;
    return <React.Fragment>
      <div className={Header}>
        <h3>{entity.name}</h3>
      </div>
      <div>
        {children.map(
          c => <Comp key={c.uid} entityId={c.uid}/>
        )}
      </div>
    </React.Fragment>;
  }
}

Object.assign(HouseholdBlockPage, {
  entityName: 'Location',
});