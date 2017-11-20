import fetch from '../../utils/fetch';
import Base from './Base';
import React from 'react';
import ActionButton from '../../layout/ActionButton';

export default class ShowPage extends Base {
  
  setupObject() {
    const entityId = this.props.match.params.entityId;
    return fetch(`/cms/${this.routeName}/${entityId}`)
      .then((entity) => ({entity}));
  }

  setupUI() {
    let topbar = this.context.topbar;
    if (topbar) {
      topbar().setTitle(`Showing ${this.entityName}`);
      topbar().setActions(this._actions());
    }
  }

  _actions() {
    const entityId = this.props.match.params.entityId;    
    return [
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
  }
}
