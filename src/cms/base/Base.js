import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BasePage extends Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      message: 'Loading...',
    };
    this._setupVariable('entityName', 'Entity');
    this._setupVariable('collectionName', this.entityName + 's');
    this._setupVariable('routeName', this.collectionName.toLowerCase());

    this._setupVariable('layout', false);
  }

  componentDidMount() {
    if (this.setupObject) {
      let objPromise = this.setupObject();      
      if (objPromise && objPromise.then) {
        objPromise.then(
          (upd) => this.setState(upd),
          (res) => this.setState({
            message: `Error ${res.status || '???'}: ${res.statusText}`,
          })
        );
      }
    }
    this.setupUI();
  }

  setupUI() {

  }

  _setupVariable(name, def) {
    this[name] = this[name] ||
      this.constructor[name] ||
      def;
  }

  render() {
    return (<p>{this.state.message}</p>);
  }

  static contextTypes = {
    topbar: PropTypes.func,
  }
}
