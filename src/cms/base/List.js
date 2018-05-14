import React from 'react';
import {Link} from 'react-router-dom';
import fetch from '../../utils/fetch';
import Base from './Base';
import Form from '../../layout/AppForm';

import {Table} from '../../styles/Table.scss';
// import {parse as queryParse} from 'query-string';

export default class ListPage extends Base {

  constructor(...args) {
    super(...args);
    this._setupVariable('createMessage', `Create new ${this.entityName}`);
    this._setupVariable('listMessage', `Existing ${this.routeName}`);
    this._setupVariable('columns', []);
    this._setupVariable('filterComponent', <input
      ref={e => this.searchInput = e}
      type="text"
      placeholder="Search"
      onChange={this.filterList.bind(this)}
    />);

  }

  setupObject() {
    if (this.searchInput) this.searchInput.value = "";
    return fetch(`/cms/${this.routeName}${this.props.location.search}`)
      .then((r) => ({entities: r, filteredEntities: r}));
  }

  filterList(event) {
    const search = this.searchInput.value.toLowerCase();
    this.setState({
      filteredEntities: this.state.entities.filter(
        e => ((e.displayName || e.name || '').toLowerCase().indexOf(search) !== -1)
      )
    });
  }

  render() {
    if (this.state.filteredEntities) {
      return (
        <React.Fragment>
          <div style={{display: 'flex', alignItems: 'center'}}>
           <h3>{this.listMessage}</h3>
            <form style={{padding: '0 0.5em'}}>
              {this.filterComponent}
            </form>
            {this.createMessage &&
              <Link to={`/${this.routeName}/new`}>
                <button>{this.createMessage}</button>
              </Link>
            }
          </div>
          <table className={Table}>
            <thead>
              <tr>
                {this.columns.map(
                  ({name}) => <td key={name}>{name}</td>
                )}
              </tr>
            </thead>
            <tbody>
              {this.state.filteredEntities.map(
                (e) => <tr key={e._id}>
                  {this.columns.map(
                    ({name, value}) => <td key={name}>{value.call(this, e)}</td>
                  )}
                </tr>
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

Object.assign(ListPage, {
  columns:[
    {
      name: 'Name',
      value: function(e) {
        return <Link to={`/${this.routeName}/${e._id}`}>
          {e.displayName || e.name || `[Unnamed / ${e._id}]`}
        </Link>;
      }
    },
    {
      name: 'Created On',
      value: (e) => (new Date(e.modifiedAt)).toLocaleDateString()
    },
    {
      name: 'Actions',
      value(e) {
        return <div style={{display: 'flex', alignItems: 'center'}}>
          <Link to={`/${this.routeName}/${e._id}/edit`}><button>Edit</button></Link>
          <Form
            method="DELETE"
            action={`/cms/${this.routeName}/${e._id}`}
            submit={<button>Delete</button>}
          />
        </div>;
      }
    }
  ],
});