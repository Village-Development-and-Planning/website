import fetch from '../../utils/fetch';
import Base from './Base';
import React from 'react';
import ActionButton from '../../layout/ActionButton';

export default class ShowPage extends Base {
  
  componentDidMount() {
    const entityId = this.props.match.params.entityId;
    fetch(`/cms/${this.routeName}/${entityId}`)
    .then((res) => this.setState({entity: res}));

    let topbar = this.context.topbar;
    if (topbar) {
      topbar().setTitle(`Showing ${this.entityName}`);
      topbar().setActions([
        <ActionButton to={`/${this.routeName}/dummy`} key="edit">
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
      ]);
    }
  }
}
