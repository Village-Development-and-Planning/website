import ListPage from '../base/List';
import React from 'react';
import Select from 'react-select';
import {parse} from 'query-string';
import _ from 'lodash';
import {t} from '../../translations';

const types = 'DISTRICT BLOCK PANCHAYAT HABITATION'.split(' ');

export default class List extends ListPage {
  constructor(...args) {
    super(...args);
    this.listMessage = 'Geographic coverage';
    this.createMessage = 'Upload geographic data';
    this.baseFilterComponent = this.filterComponent;
    this.columns = Object.assign({}, this.columns);
    this.columns.name = Object.assign({}, this.columns.name);

    this.columns.name.value = (e) => <button
      className="link"
      onClick={() => this.onPrefixChange(`${e.uid}/`)}
    >
      {e.name}
    </button>;
    this.columns.name.stringvalue = (e) => e.name;
  }

  render() {
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'HABITATION';
    this.locationType = type;
    const tIndex = types.indexOf(type);
    this.columnsOrder =  [].concat(
      'path',
      types.slice(0, tIndex),
      'name',
    );

    this.columns.name.name = _.capitalize(`${type} NAME`);
    this.filterComponent = <React.Fragment>
      <Select
        onChange={e => this.onTypeChange(e)}
        value={type}
        className="grow"
        clearable={false}
        options={types.map(tp => ({value: tp, label: t(_.capitalize(tp))}))}
      />
      {this.baseFilterComponent}
    </React.Fragment>;
    return super.render();
  }

  onTypeChange(e) {
    this.setQuery({type: e.value});
  }

  onPrefixChange(prefix, type) {
    type = type || this.locationType;
    const tIndex = types.indexOf(type);
    if (tIndex !== -1 && tIndex < types.length - 1) {
      this.setQuery({
        type: types[tIndex+1],
        prefix,
      });
    }
  }
};

List.entityName = 'Location';
List.columns = Object.assign({}, List.columns, {
  type: {name: 'Type', value: (e)=> e.type},
  path: {name: 'Code', value: (e) => e.uid},
  name: {
    value(e) {
      return <button
        className="link"
        onClick={this.onPrefixChange.bind(this, `${e.uid}/`)}
      >{e.name}</button>;
    },
    rawValue: (e) => e.name
  }
}, ['DISTRICT', 'BLOCK', 'PANCHAYAT',].reduce(
  (acc, e, idx) => Object.assign(acc, {
    [e]: {
      name: _.capitalize(`${e} NAME`),
      value(c) {
        const prefix = c.uid.split('/').slice(0, idx+1).join('/');
        return <button
          className="link"
          onClick={this.onPrefixChange.bind(this, `${prefix}/`, e)}
        >{c.payload && c.payload[`${e}_NAME`]}</button>;
      },
      rawValue: (c) => c.payload && c.payload[`${e}_NAME`],
    }
  }),
  {}
));
