import React from 'react';
import {Link} from 'react-router-dom';
import fetch from '../../utils/fetch';
import Base from './Base';

import {Table} from '../../styles/Table.scss';
import {ActionBar} from './style.scss';

import Delete from './Delete';

export default class ListPage extends Base {

  constructor(...args) {
    super(...args);
    this._setupVariable('createMessage', `Create new ${this.entityName}`);
    this._setupVariable('listMessage', `Existing ${this.routeName}`);
    this._setupVariable('columns', []);
    this._setupVariable('columnsOrder', []);
    this._setupVariable('actions', []);
    this._setupVariable('actionsOrder', []);
    this._setupVariable('sortOrder', []);

    this._setupVariable('filterComponent', <input
      style={{margin: '1ex 0.5em', fontSize: '1.2em', lineHeight: '1.5em'}}
      className="grow"
      ref={e => this.searchInput = e}
      type="text"
      placeholder="Search"
      onChange={this.filterList.bind(this)}
    />);
  }

  setupObject() {
    if (this.searchInput) this.searchInput.value = "";
    return fetch(`/cms/${this.routeName}${this.props.location.search}`)
      .then(r => this._sortEntities(r))
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
    const createMessage = this.props.createMessage || this.createMessage;
    const listMessage = this.props.listMessage || this.listMessage;
    const columnsOrder = this.props.columnsOrder || this.columnsOrder;
    if (this.state.filteredEntities) {
      return (
        <React.Fragment>
          <h3>{listMessage}</h3>
          {this.props.disableActionBar || <div className={ActionBar}>
            {this.filterComponent}
            {createMessage &&
              <Link to={`/${this.routeName}/new${this.props.location.search}`}>
                <button>{createMessage}</button>
              </Link>
            }
          </div>}
          <table className={Table}>
            <thead>
              <tr>
                {columnsOrder.map(key => {
                  const name = this.columns[key].name;
                  return <td key={name}>{name}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.filteredEntities.map(
                (e) => <tr key={e._id}>
                  {columnsOrder.map(key => {
                    const {name, value} = this.columns[key];
                    return <td key={name}>{value.call(this, e)}</td>;
                  })}
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

  _sortEntities(e) {
    if (!this.sortOrder) return e;
    return e.sort((a, b) => {
      for(let key of this.sortOrder) {
        let aVal, bVal;
        if (typeof key === 'function') {
          aVal = key.call(this, a);
          bVal = key.call(this, b);
        } else {
          aVal = a[key];
          bVal = b[key];
        }
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
      };
      return 0;
    });
  }
}

Object.assign(ListPage, {
  columns: {
    name: {
      name: 'Name',
      value: function(e) {
        return <Link to={`/${this.routeName}/${e._id}`}>
          {e.displayName || e.name || `[Unnamed / ${e._id}]`}
        </Link>;
      }
    },
    createdOn: {
      name: 'Created On',
      value: (e) => (new Date(e.modifiedAt)).toLocaleDateString()
    },
    actions: {
      name: 'Actions',
      value(e) {
        const actionsOrder = this.props.actionsOrder || this.actionsOrder;
        return <div style={{display: 'flex', alignItems: 'baseline'}}>
          {actionsOrder.map(key => (this.actions[key]).call(this, e))}
        </div>;
      }
    },
  },
  columnsOrder: ['name', 'createdOn', 'actions'],
  actions: {
    edit(e) {
      return <Link key='edit' to={`/${this.routeName}/${e._id}/edit`}><button>Edit</button></Link>;
    },
    delete(e) {
      return <Delete
        key='delete'
        action={`/cms/${this.routeName}/${e._id}`}
      >Delete</Delete>;
    }
  },
  actionsOrder: ['edit', 'delete'],
  sortOrder: ['name']
});