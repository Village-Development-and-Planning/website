import ListPage from '../base/List';
import React from 'react';
import Select from 'react-select';
import {parse} from 'query-string';

export default class List extends ListPage {
  constructor(...args) {
    super(...args);
    this.createMessage = 'Upload Locations CSV';
    this.baseFilterComponent = this.filterComponent;
  }

  render() {
    const types = 'DISTRICT BLOCK PANCHAYAT HABITATION'.split(' ');
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'DISTRICT';
    this.filterComponent = <React.Fragment>
      <Select
        onChange={e => this.onTypeChange(e)}
        value={type}
        className="grow"
        clearable={false}
        options={types.map(t => ({value: t, label: t}))}
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
  type: {name: 'Type', value: (e)=> e.type}
});
List.columnsOrder = ['name', 'type', 'createdOn'];