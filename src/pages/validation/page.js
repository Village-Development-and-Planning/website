import React from 'react';
import {T} from '../../translations';

import ShowPage from '../../cms/base/Show';
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
    const entity = this.state.entity;
    const Comp = this.props.component;
    if (!entity) return super.render();
    const {children} = entity;
    return <React.Fragment>
      <div className={Header}>
        <h3><T>{entity.name}</T></h3>
      </div>
      <div>
        {children.map(
          c => <Comp key={c.uid} entityId={c.uid}/>
        )}
      </div>
    </React.Fragment>;
  }
}

Object.assign(MappingBlockPage, {
  entityName: 'Location',
});