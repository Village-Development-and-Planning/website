import fetch from '../../utils/fetch';
import Base from './Base';
import React from 'react';
import ActionButton from '../../layout/ActionButton';

export default class ShowPage extends Base {

  setupObject() {
    const entityId = this.props.match.params.entityId;
    return fetch(`/cms/${this.cmsRouteName}/${entityId}`)
      .then((entity) => ({entity}));
  }

  _actions() {
    const entityId = this.props.match.params.entityId;
    return [
      <ActionButton to={`/${this.routeName}/${entityId}/edit`} key="edit">
        Edit
      </ActionButton>,
    ];
  }
}
