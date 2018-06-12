import React from 'react';
import {Link} from 'react-router-dom';
import fetch from '../../utils/fetch';
import Base from './Base';
import {t, T} from '../../translations';

import {Table} from '../../styles/Table.scss';
import {ActionBar} from './style.scss';

import Delete from './Delete';

export default class ListPage extends Base {

  constructor(...args) {
    super(...args);
    this._setupVariable('createMessage', (`Create new ${this.entityName}`));
    this._setupVariable('listMessage', (`Existing ${this.routeName}`));
    this._setupVariable('listNote', '');
    this._setupVariable('columns', []);
    this._setupVariable('columnsOrder', []);
    this._setupVariable('actions', []);
    this._setupVariable('actionsOrder', []);
    this._setupVariable('sortOrder', []);
    this.state = {
      sort: {
        column: null,
        direction: 'asc'
      }
    };

    this._setupVariable('filterComponent', null);
  }

  _defaultFilterComponent() {
    return <input
      className="grow"
      ref={e => this.searchInput = e}
      type="text"
      placeholder={t("Search")}
      onChange={this.filterList.bind(this)}
    />;
  }

  setupObject() {
    if (this.searchInput) this.searchInput.value = "";
    return fetch(`/cms/${this.cmsRouteName}${this.props.location.search}`)
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

  onSort(event, sortKey){
    let filteredEntities = this.state.filteredEntities;
    let direction = (this.state.sort.column === sortKey) ?
      (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'asc';

    this.sortOrder = [`${direction === 'desc' ? '-' : ''}${sortKey}`];
    let sort = {
      column : sortKey,
      direction : direction
    };
    this.setState({
      filteredEntities: this._sortEntities(filteredEntities), sort
    });
  }

  setArrow (column){
    let className = 'sort-direction';
    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    return className;
  };

  render() {
    const createMessage = this.props.createMessage || this.createMessage;
    let listMessage = this.props.listMessage || this.listMessage;
    const columnsOrder = this.props.columnsOrder || this.columnsOrder;
    if (typeof listMessage === 'string') listMessage = <h3>{listMessage}</h3>;
    if (this.state.filteredEntities) {
      return (
        <React.Fragment>
          <T>{listMessage}</T>
          {(this.props.listNote !== undefined && this.props.listMessage !== '')
            ? <p> <em><T>{this.props.listNote}</T></em></p>
            : null
          }

          {this.props.disableActionBar || <div className={ActionBar}>
            {this.filterComponent || this._defaultFilterComponent()}
            {createMessage &&
              <Link to={`/${this.routeName}/new${this.props.location.search}`}>
                <button><T>{createMessage}</T></button>
              </Link>
            }
          </div>}
          <table className={Table}>
            <thead>
              <tr>
                {columnsOrder.map(key => {
                  const name = this.columns[key].name;
                  if(key === 'actions'){
                    return <td key={name}><T>{name}</T></td>;
                  }

                  return <td onClick={e => this.onSort(e, key)} key={name}>
                          <T>{name}</T>
                          <span className={this.setArrow(key)}></span>
                        </td>;

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
        let neg = 1;
        if (key.startsWith('-')) {
          neg = -1;
          key = key.slice(1);
        }
        const getter = this.columns[key].stringValue
          || this.columns[key].value
          || ((e) => e[key]);

        const aVal = getter.call(this, a);
        const bVal = getter.call(this, b);
        if (aVal < bVal) return -1 * neg;
        if (aVal > bVal) return 1 * neg;
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
      },
      stringValue: e => (e.displayName || e.name || e._id)
    },
    createdOn: {
      name: 'Date created',
      value: (e) => (new Date(e.modifiedAt)).toLocaleDateString()
    },
    actions: {
      name: 'Actions',
      value(e) {
        const actionsOrder = this.props.actionsOrder || this.actionsOrder;
        return <div style={{display: 'flex', alignItems: 'baseline'}}>
          {actionsOrder.map(key => {
            const el = (this.actions[key]).call(this, e);
            return Object.assign({}, el, {key});
          })}
        </div>;
      }
    },
  },
  columnsOrder: ['name', 'createdOn', 'actions'],
  actions: {
    edit(e) {
      return <Link key='edit' to={`/${this.routeName}/${e._id}/edit`}>
        <button><T>Edit</T></button>
      </Link>;
    },
    delete(e) {
      return <Delete
        key='delete'
        action={`/cms/${this.cmsRouteName}/${e._id}`}
      ><T>Delete</T></Delete>;
    }
  },
  actionsOrder: ['edit', 'delete'],
  sortOrder: ['name'],
});
