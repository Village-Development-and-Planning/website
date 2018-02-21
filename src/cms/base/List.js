import React from 'react';
import {Link} from 'react-router-dom';
import fetch from '../../utils/fetch';
import Base from './Base';

export default class ListPage extends Base {

  setupObject() {
    return fetch(`/cms/${this.routeName}`)
      .then((r) => ({entities: r}));
  }
  
  render() {
    if (this.state.entities) {
      return (        
        this.state.entities.map((e) => {
          return (
            <p key={e._id}>
              <Link to={`/${this.routeName}/${e._id}`}>{e.displayName || e.name || '[Unnamed]'}</Link>
            </p>
          );
        })
      );
    } else {
      return super.render();
    }
  }
}
