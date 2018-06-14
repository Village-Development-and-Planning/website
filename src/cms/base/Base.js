import React, {Component} from 'react';

import {parse, stringify} from 'query-string';

export default class BasePage extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      message: 'Loading...',
    };
    this._setupVariable('entityName', 'Entity');
    this._setupVariable('collectionName', this.entityName + 's');
    this._setupVariable('routeName', this.collectionName.toLowerCase());
    this._setupVariable('cmsRouteName', this.routeName);
    this._setupVariable('layout', false);
  }

  componentDidUpdate() {
    if (this.shouldUpdate()) {
      this.componentDidMount();
    }
  }

  componentDidMount() {
    if (this.setupObject) {
      let objPromise = this.setupObject();
      if (objPromise && objPromise.then) {
        objPromise.then(
          (upd) => upd ?
            this.setState(Object.assign(upd, {location: this.props.location}))
            : Promise.reject({statusText: 'Cannot access entity.'})
        ).catch(
          (res) => this.setState({
            message: `Error ${res.status || '???'}: ${res.statusText}`,
            location: this.props.location,
          })
        );
      }
    }
    this.setupUI && this.setupUI();
  }

  shouldUpdate() {
    return (this.state.location !== this.props.location);
  }

  _setupVariable(name, def) {
    this[name] = this[name] ||
      this.constructor[name] ||
      def;
  }

  setQuery(params) {
    const p = Object.assign(
      parse(this.props.location.search, {ignoreQueryPrefix: true}) || {},
      params
    );
    this.props.history.push(`${this.props.location.pathname}?${stringify(p)}`);
  }

  render() {
    return (<p>{this.state.message}</p>);
  }
}
