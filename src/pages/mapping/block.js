import React from 'react';

import ShowPage from '../../cms/base/Show';
import PanchayatComp from './components/panchayat';

import {Header} from './../validation/style.scss';

export default class MappingBlockPage extends ShowPage {
  componentDidUpdate() {
    if (!this.props.match && !this.props.entity) return;

    if (this.props.entity) {
      if (this.state && this.state.entity && (this.state.entity === this.props.entity)) {
        return;
      }
      return this.componentDidMount();
    }

    const entityId = this.props.match.params.entityId;
    const entity = this.state && this.state.entity;
    if (!entity || (entity.uid.replace(/\//g, '_') !== entityId)) {
      this.componentDidMount();
    }
  }

  setupObject() {
    if (this.props.entity) return Promise.resolve({entity: this.props.entity});
    return super.setupObject();
  }

  render() {
    const level = this.props.level || 'DISTRICT';
    const entity = this.state.entity;
    if (!entity) return super.render();
    const {payload, children} = entity;
    return <React.Fragment>
      <div className={Header}>
        <h3>{entity.name}</h3>
        <h3>{payload[`${level}_NAME`]}</h3>
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