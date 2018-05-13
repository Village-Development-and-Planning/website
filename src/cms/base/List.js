import React from 'react';
import {Link} from 'react-router-dom';
import fetch from '../../utils/fetch';
import Base from './Base';
import Form from '../../layout/AppForm';
import {parse as queryParse} from 'query-string';

export default class ListPage extends Base {

  constructor(...args) {
    super(...args);
    this._setupVariable('createMessage', `Create ${this.entityName}`);
  }

  setupObject() {
    return fetch(`/cms/${this.routeName}`)
      .then((r) => ({entities: r}));
  }

  render() {
    const query = queryParse(this.props.location.search, {ignoreQueryPrefix: true});
    if (this.state.entities) {
      return (
        <React.Fragment>
          {/* {this.createMessage &&
            <Link to={`/${this.routeName}/new`}>
              <h3>{this.createMessage}</h3>
            </Link>
          } */}
          <h3>Existing {this.routeName}</h3>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Created on</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.state.entities.map(
                (e) => (
                  <tr key={e._id}>
                    <td>
                      <Link to={`/${this.routeName}/${e._id}`}>{e.displayName || e.name || '[Unnamed]'}</Link>
                    </td>
                    <td>
                      {(new Date(e.modifiedAt)).toLocaleDateString()}
                    </td>
                    <td>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Form
                          method="DELETE"
                          action={`/cms/${this.routeName}/${e._id}`}
                          actionName="Delete"
                        />
                        <button><Link to={`/surveys/${e._id}/edit`}>Edit</Link></button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

        </React.Fragment>
      );
    } else {
      return super.render();
    }
  }
}
