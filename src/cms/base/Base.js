import React, {Component} from 'react';
import {parse, stringify} from 'query-string';
import {t} from '../../translations';

export default class BasePage extends Component {

  constructor(...args) {
    super(...args);
    this.state = {};
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
        this.setState({loading: true, message: t('Loading...'), location: this.props.location});
        objPromise.then(
          (upd) => upd ?
            this.setState(Object.assign(upd, {loading: false, location: this.props.location}))
            : Promise.reject({statusText: 'Cannot access entity.'})
        ).catch(
          (res) => this.setState({
            message: `Error ${res.status || '???'}: ${res.statusText}`,
            location: this.props.location,
            loading: false,
          })
        );
      }
    }
    this.setupUI && this.setupUI();
  }

  shouldUpdate() {
    return !this.state.loading && (this.state.location !== this.props.location);
  }

  _setupVariable(name, def) {
    this[name] = this[name] ||
      this.constructor[name] ||
      def;
  }

  setQuery(params) {
    this.props.history.push(
      `${this.props.location.pathname}?${this.mergeQuery(params)}`
    );
  }

  mergeQuery(params) {
    const p = Object.assign(
      parse(this.props.location.search, {ignoreQueryPrefix: true}) || {},
      params
    );
    return stringify(p);
  }

  getQuery() {
    return parse(this.props.location.search, {ignoreQueryPrefix: true}) || {};
  }

  render() {
    return (<p>{this.state.message}</p>);
  }
}
