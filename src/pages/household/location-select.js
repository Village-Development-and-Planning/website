import React from 'react';
import Select from 'react-select';

import style from '../validation/style.scss';
import 'react-select/dist/react-select.css';

import fetch from '../../utils/fetch';

export default class extends React.Component {

  constructor(...args) {
    super(...args);
    this.hierarchy = 'DISTRICT BLOCK PANCHAYAT'.split(' ');
    this.state = {
      options: {},
      values: {},    
    };
  }

  _fetchLocations() {
    let p = fetch(`/cms/locations/${this.currentScope || ''}`);
    if (!this.currentScope) {
      p = p.then(e => e.filter(l => (l.type === this.hierarchy[0])));
      p = p.then(e => e.map(
        ({name, code}) => ({value: code, label: `${code} -${name}`})
      ));
    }    
    p.then(e => console.log(e) || e);
    p.then(e => this.setState({
      options: {[this.hierarchy[0]]: e},
    }));
    return p;
  }

  componentDidMount() {
    this._fetchLocations();
  }

  _onValueChange(level, value) {
    const values = this.state.values;
    values[level] = value;    
  }

  render() {  
    return <div className={style.LocationBar}>
      {this.hierarchy.map(level => {
        const opts = this.state.options[level];
        let disabled = false;
        let value = this.state.values[level] || 'none';
        if (!opts) disabled = true;
        console.log(opts);
        return <label key={level} className={style.SelectBox}>
          <h4>{level}</h4>
          <Select name={level} disabled={disabled}
            onChange={e => this.setState({values: {[level]: e}})}
            value={value}
            options={opts || [{value: 'none', label: 'None'}]}
          />
        </label>;
      })}
    </div>;
  }
}