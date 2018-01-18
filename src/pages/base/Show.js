import fetch from '../../utils/fetch';
import Base from './Base';
import React from 'react';
import ActionButton from '../../layout/ActionButton';

export default class ShowPage extends Base {
  
  setupObject() {
    const entityId = this.props.match.params.entityId;
    return fetch(`/cms/${this.routeName}/${entityId}`)
      .then((r) => ({entity: r}));
  }

  setupUI() {
    const entityId = this.props.match.params.entityId;
    const topbar = this.context.topbar;

    this.actions = this.actions || this.props.actions || [
      <ActionButton to={`/${this.routeName}/${entityId}/edit`} key="edit">
        Edit
      </ActionButton>,
      <ActionButton 
        key="delete"
        onClick={() => {
          fetch(`/cms/${this.routeName}/${entityId}`, {method: 'DELETE'});
        }}
      >
        Delete
      </ActionButton>,
    ];
    if (topbar) {
      topbar().setTitle(`Showing ${this.entityName}`);
      topbar().setActions(this.actions);
    }
  }
}
