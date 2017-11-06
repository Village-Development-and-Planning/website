import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BasePage extends Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      message: 'Loading...',
    }
    this._setupVariable('entityName', 'Entity');
    this._setupVariable('collectionName', this.entityName + 's');
    this._setupVariable('routeName', this.collectionName.toLowerCase());

    this._setupVariable('layout', false);
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
