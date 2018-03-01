import React from 'react';
import {Link} from 'react-router-dom';
import fetch from '../../utils/fetch';
import Base from './Base';
import Form from '../../layout/AppForm';
import {parse as queryParse} from 'query-string';

export default class ListPage extends Base {

  setupObject() {
    return fetch(`/cms/${this.routeName}`)
      .then((r) => ({entities: r}));
  }
  
  render() {
    const query = queryParse(this.props.location.search, {ignoreQueryPrefix: true});
    if (this.state.entities) {
      return (        
        this.state.entities.map((e) => {
          return (
            <p key={e._id}>
              <Link to={`/${this.routeName}/${e._id}`}>{e.displayName || e.name || '[Unnamed]'}</Link>
              {query.delete 
                && <Form 
                  method="DELETE" 
                  action={`/cms/${this.routeName}/${e._id}`}
                  actionName="Delete"
                />
              }
            </p>
          );
        })
      );
    } else {
      return super.render();
    }
  }
}
