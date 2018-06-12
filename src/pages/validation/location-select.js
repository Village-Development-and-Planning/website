import React from 'react';
import Select from 'react-select';

import style from './style.scss';
import 'react-select/dist/react-select.css';

import fetch from '../../utils/fetch';
import {T} from '../../translations';

export default class extends React.Component {

  constructor(...args) {
    super(...args);
    this.hierarchy = this.props.hierarchy || 'DISTRICT BLOCK PANCHAYAT'.split(' ');
    this.state = {
      options: {},
      values: {},
    };
  }

  _fetchLocations(scope) {
    const id = scope ? scope.replace(/\//g, '_') : '';
    let p = fetch(`/cms/locations/${id}`);
    const options = this.state.options || {};
    const level = scope ? scope.split('/').length : 0;
    if (!scope) {
      p = p.then(e => e.filter(l => (l.type === this.hierarchy[0])));
      p = p.then(e => e.map(
        ({name, code, uid}) => ({value: uid, label: `${code} -${name}`})
      ));
    } else {
      p = p.then(e => e.children.map(
        ({name, code, uid}) => ({value: uid, label: `${code} -${name}`}),
      ));
    }
    p = p.then(e => {
      options[this.hierarchy[level]] = e;
      this.setState({options});
    });
    return p;
  }

  componentDidMount() {
    this._fetchLocations();
  }

  _onValueChange(level, value) {
    const values = this.state.values;
    const options = this.state.options;
    values[level] = value ? (value.value || value) : 'all';

    let index = this.hierarchy.indexOf(level);
    for (index++; index < this.hierarchy.length; index++) {
      values[this.hierarchy[index]] = 'all';
      options[this.hierarchy[index]] = [];
    }

    this.setState({values, options});
    if (level !== this.hierarchy[this.hierarchy.length - 1]) this._fetchLocations(values[level]);

    let keyLevel = null;
    this.hierarchy.find(
      (l) => {
        if (!values[l] || (values[l] === 'all')) return true;
        keyLevel = l;
        return false;
      }
    );

    this.props.onValueChange && this.props.onValueChange({keyLevel, values});
  }

  render() {
    return <div className={style.LocationBar}>
      {this.hierarchy.map(level => {
        let opts = this.state.options[level] || [];
        let disabled = false;
        let value = this.state.values[level] || 'all';
        if (!opts.length) disabled = true;
        opts = opts.concat({value: 'all', label: 'All'});
        return <label key={level} className={style.SelectBox}>
          <h4><T>{level + ' NAME'}</T></h4>
          <Select name={level} disabled={disabled}
            onChange={e => this._onValueChange(level, e)}
            value={value}
            clearable={false}
            options={opts}
          />
        </label>;
      })}
    </div>;
  }
}