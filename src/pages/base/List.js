import React from 'react';
import {Link} from 'react-router-dom'
import fetch from '../../utils/fetch';
import Base from './Base';
import ActionButton from '../../layout/ActionButton';

export default class ListPage extends Base {
  
  componentDidMount() {
    fetch(`/cms/${this.routeName}`)
      .then((res) => this.setState({entities: res}))

    let topbar = this.context.topbar;
    if (topbar) {
      topbar().setTitle(`Listing ${this.collectionName}`);
      topbar().setActions([
        <ActionButton to={`/${this.routeName}/new`} key="create">
          Create
        </ActionButton>,
      ])
    }
  }

  render() {
    if (this.state.entities) {
      return (        
        this.state.entities.map((e) => {
          return (
            <p key={e._id}>
              <Link to={`/${this.routeName}/${e._id}`}>{e.name}</Link>
            </p>
          );
        })
      );
    } else {
      return super.render();
    }
  }
}
