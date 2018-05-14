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
      {this.baseFilterComponent}
      <Select
        onChange={e => this.onTypeChange(e)}
        value={type}
        clearable={false}
        options={types.map(t => ({value: t, label: t}))}
      />
    </React.Fragment>;
    return super.render();
  }

  onTypeChange(e) {
    this.props.history.push(`/${this.routeName}?type=${e.value}`);
  }

  setupObject() {
    return super.setupObject().then(
      (res) => {
        res.entities.forEach((s) => {
          s.displayName = `${s.uid} - ${s.name}`;
        });
        return res;
      }
    );
  }
};

List.entityName = 'Location';
List.columns = [{name: 'Type', value: (e) => e.type}].concat(ListPage.columns);
