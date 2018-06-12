import ListPage from '../base/List';
import React from 'react';
import Select from 'react-select';
import {parse} from 'query-string';
import _ from 'lodash';
import {t} from '../../translations';

export default class List extends ListPage {
  constructor(...args) {
    super(...args);
    this.listMessage = 'Geographic coverage';
    this.createMessage = 'Upload geographic data';
    this.baseFilterComponent = this.filterComponent;
    this.columns = Object.assign({}, this.columns);
    this.columns.name = Object.assign({}, this.columns.name);
  }

  render() {
    const types = 'DISTRICT BLOCK PANCHAYAT HABITATION'.split(' ');
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'HABITATION';
    const tIndex = types.indexOf(type);
    this.columnsOrder =  this.constructor.columnsOrder.concat(types.slice(0, tIndex));
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
    this.props.history.push(`/${this.routeName}?type=${e.value}`);
  }
};

List.entityName = 'Location';
List.columns = Object.assign({}, List.columns, {
  type: {name: 'Type', value: (e)=> e.type},
  path: {name: 'Code', value: (e) => e.uid},
}, ['PANCHAYAT', 'BLOCK', 'DISTRICT'].reduce(
  (acc, e) => Object.assign(acc, {
    [e]: {name: _.capitalize(`${e} NAME`), value: (c) => c.payload && c.payload[`${e}_NAME`]}
  }),
  {}
));
List.columnsOrder = ['path', 'name'];